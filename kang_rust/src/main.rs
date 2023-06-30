use std::{env, fs};
use sqlx::mysql::MySqlPoolOptions;
use sqlx_core::types::chrono;
use tokio::time::{sleep, Duration};
//
// TODO:
//  X Get the connecton details from a env file or env variable.
//  X Connect to the mysql database using that info.
//  X Get some records.
//  X Get totla number of web sessions as a count
//  X set a loop that runs evey 30 seconds.
//  X get the new total.
//  X store new total in the database.
//  - ??? 
//  - Get data that we can use to make a graph.
//  - Profit?
//

fn get_value_from_env() -> Option<String> { 
  match env::var("name2") {
    Ok(value) => Some(value),
    Err(_) => None,
  }
}

fn get_value_from_file() -> Option<String> {
    let file_contents = match fs::read_to_string(".env"){
        Ok(contents) => contents,
        Err(_) => return None,
    };
    
    let line = file_contents
        .lines()
        .find(|line| line.contains("db_connection"));

    line.and_then(|line| {
        let start_index = line.find('"')?;
        let end_index = line.rfind('"')?;
        Some(line[start_index + 1 ..end_index].to_string())
    })
}

fn get_db_con_value() -> Result<String, Box<dyn std::error::Error>> {
    if let Some(value) = get_value_from_env() {
        Ok(value)
    } else {
        get_value_from_file().ok_or("db_connection not found in file".into())
    }
}

#[derive(sqlx::FromRow)]
#[sqlx(rename_all = "camelCase")]
struct WebSession {
    id: i32,
    ip_address_id: i32,
    date_created: chrono::DateTime<chrono::Local>,
    session_duration: i32,
    user_agent: String,
    ip_city: String,
    ip_country: String,
    ip_state: String,
}

#[tokio::main]
async fn main() -> Result<(), sqlx::Error> {
    let mut db_con_value: String = String::new();
    match get_db_con_value() {
        Ok(value) => {
            db_con_value = value;
        },
        Err(err) => eprintln!("Error {}", err),
    };
    
    let pool = MySqlPoolOptions::new()
        .max_connections(5)
        .connect(db_con_value.as_str())
        .await?;
    loop { 
        let count: i64 = sqlx::query_scalar("SELECT COUNT(*) FROM web_session")
            .fetch_one(&pool)
            .await?;

        println!("number of records: {}", count);

        sqlx::query("INSERT INTO web_session_count_history (count) VALUES (?)")
            .bind(count)
            .execute(&pool)
            .await?;


        sleep(Duration::from_secs(600)).await;
    }
}
