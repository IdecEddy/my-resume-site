import Session_table from '~/components/admin/session_table';
import Top_five_ip_table from '~/components/admin/top_five_ips_table';
import Page_views_card from '~/components/admin/page_views_card';
import Unique_page_views from '~/components/admin/unique_page_views';
import Average_session_duration from '~/components/admin/average_session_duration';
import Total_session_duration from '~/components/admin/total_session_duration';
const AdminIndex = () => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <Page_views_card />
        <Unique_page_views />
        <Average_session_duration />
        <Total_session_duration />
      </div>
      <div className="flex flex-row justify-center">
        <Session_table />
      </div>
    </>
  );
};

export default AdminIndex;
