"use client";

import React from "react";
import { useAccount } from "wagmi";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const MyOrders = () => {
  const { address: connectedAddress } = useAccount();
  const formatTimestamp = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) * 1000);
    return date.toLocaleString();
  };

  const { data: events } = useScaffoldEventHistory({
    contractName: "web3Food",
    eventName: "FoodBought",
    fromBlock: 0n,
    watch: true,
    filters: { buyer: connectedAddress },
    blockData: true,
    transactionData: true,
    receiptData: true,
  });
  return (
    <>
      <div className="my-10 font-mono dark:text-lime-200 mx-auto text-3xl">My Orders</div>

      {events?.length === 0 ? (
        <div className="text-center text-lg">You dont have a order!</div>
      ) : (
        <div className="overflow-x-auto mx-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Food Name</th>
                <th>Time</th>
                <th>Table No</th>
              </tr>
            </thead>
            <tbody>
              {events?.map((event, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{event.args?.name}</td>
                  <td>{event.args?.time ? formatTimestamp(event.args.time) : "N/A"}</td>
                  <td>{event.args?.tableId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default MyOrders;
