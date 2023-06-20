import { api } from '~/utils/api';

const Top_five_ip_table = () => {
  const ip_table = api.session.get_top_five_ips.useQuery();
  return (
    <>
      <table className="border-collapse border border-slate-400 text-white">
        <thead>
          <tr>
            <th className="border border-slate-300 pl-5 pr-5">
              IP Address
            </th>
            <th className="border border-slate-300 pl-5 pr-5">
              Number of Visits
            </th>
          </tr>
        </thead>
        <tbody>
          {ip_table.data?.map((record, index) => (
            <tr key={index}>
              <td className="border border-slate-300 pl-5 pr-5">
                {' '}
              </td>
              <td className="border border-slate-300 pl-5 pr-5 text-center">
                {record.count}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Top_five_ip_table;
