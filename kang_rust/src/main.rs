use std::{env, fs, error::Error};
use sqlx::{Row};
use sqlx::mysql::{MySqlPoolOptions, MySqlRow};
use chrono::NaiveDate; 
//
// TODO:
//  - Get the connecton details from a env file or env variable.
//  - Connect to the mysql database using that info.
//  - Get some records.
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
struct web_session {
    id: i64,
    ip_address_id: i64,
    date_created: chrono::NaiveDate,
    session_duration: i64,
    user_agent: String,
    ip_city: String,
    ip_country: String,
    ip_state: String
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
    let rows = sqlx::query("SELECT * FROM web_session")
        .fetch_all(&pool)
        .await?;

    for row in rows {
        let id: i32 = row.get("id");
        let session_duration: i32 = row.get("sessionDuration"); 

        println!("ID: {} Session Duration: {}", id, session_duration)
    }

    Ok(())
}
