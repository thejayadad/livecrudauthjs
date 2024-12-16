import { getAllClients } from "@/lib/actions/get-all-clients";
import StatCard from "@/components/card/stat-card";
import ClientCard from "@/components/card/client-card";


export default async function Home() {
  const clients = (await getAllClients()) || []

  //Calculate Total
  //Get Client Total
  const totalClients = clients.length
  
  //Total Paid Clients
  const totalPaidClients = clients.filter((client: {status: string;}) => client.status === 'paid').length

  //Total Unpaid Clients
  const totalUnPaidClients = clients.filter((client: {status: string;}) => client.status === 'unpaid').length

  //Total Paid Amount
  const totalPaidAmount = clients.filter((client: {status: string}) => client.status === 'paid').reduce((sum: any, client: {total: any;}) => sum + client.total, 0)

  //Total Unpaid Amount
  const totalUnpaidAmount = clients.filter((client: {status: string}) => client.status === 'unpaid').reduce((sum: any, client: {total: any;}) => sum + client.total, 0)

  return (
    <div className='w-full'>
      <div className='mx-auto max-w-screen-xl p-4'>
      <h1 className='font-bold text-xl text-gray-800'>Client Dashboard</h1>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 pt-6">
          <StatCard
          title="Total Clients"
          amount={totalClients}
          />
          <StatCard
          title="Total Paid Clients"
          amount={totalPaidClients}
          />
          <StatCard
          title="Total Unpaid Clients"
          amount={totalUnPaidClients}
          />
          <StatCard
          title="Total Amount Collected"
          amount={totalPaidAmount}
          />
          <StatCard
          title="Total Amount Outstanding"
          amount={totalUnpaidAmount}
          />
        </div>
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 mt-8 border-t-[1px]">
          {clients.map((client) => (
        <ClientCard
        key={client.id}
          client={client}
        />
      ))}
          </div>
      </div>  
    </div>
  );
}
