"use client";

import React from "react";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const AdminPanel = () => {
  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("web3Food");

  const { data } = useScaffoldReadContract({
    contractName: "web3Food",
    functionName: "getAllOrders",
  });

  const unpreparedOrders = data ? data.filter(order => !order.isPrepared) : [];

  return (
    <>
      <div className="overflow-x-auto mx-auto my-10">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Food Name</th>
              <th>Table No</th>
              <th>Buyer</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {unpreparedOrders.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{order.name}</td>
                <td>{order.tableId}</td>
                <td>
                  <Address address={order.buyer} />
                </td>
                <td>{order.isPrepared ? "Prepared" : "Not Prepared"}</td>
                <td>
                  <button
                    onClick={async () => {
                      try {
                        await writeYourContractAsync({
                          functionName: "prepareOrder",
                          // @ts-ignore
                          args: [order.orderId || 0n],
                        });
                      } catch (e) {
                        console.error("Error setting greeting:", e);
                      }
                    }}
                    className="btn btn-primary"
                  >
                    Prepare
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminPanel;
