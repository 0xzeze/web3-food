"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { formatEther } from "viem";
import { useScaffoldEventHistory, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const Menu = () => {
  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("web3Food");

  const [loading, setLoading] = useState(false);

  const [table, setTable] = useState("");

  const { data: events } = useScaffoldEventHistory({
    contractName: "web3Food",
    eventName: "FoodAdded",
    fromBlock: 0n,
    watch: true,
    blockData: true,
    transactionData: true,
    receiptData: true,
  });

  return (
    <>
      <div className="mx-auto font-mono text-3xl my-5">Our Menu</div>

      <label className="form-control w-full max-w-xs mx-auto mb-5">
        <div className="label">
          <span className="label-text">What is your table number?</span>
        </div>
        <input
          type="text"
          value={table}
          onChange={event => setTable(event.target.value)}
          placeholder="Example : 20"
          className="input input-bordered w-full max-w-xs"
        />
        <div className="label"></div>
      </label>

      <div className="flex flex-wrap gap-4 justify-center">
        {events?.map((event, index) => (
          <div key={index} className="card bg-base-100 w-80 shadow-xl mx-10">
            <figure>
              <Image
                src={`/foods/${event.args.image}`}
                alt={event.args.name || "Food Image"}
                width={400}
                height={400}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{event.args.name}</h2>
              <p>{event.args.description}</p>
              <div className="card-actions justify-center">
                <button
                  className="btn btn-primary"
                  onClick={async () => {
                    setLoading(true);
                    try {
                      await writeYourContractAsync({
                        functionName: "buyFood",
                        args: [event.args.foodId, table],
                        value: event.args.price || 0n,
                      });
                    } catch (e) {
                      console.error("Error:", e);
                    } finally {
                      setLoading(false);
                    }
                  }}
                >
                  {loading ? (
                    <span className="loading loading-dots loading-xl"></span>
                  ) : (
                    `${formatEther(event.args.price || 0n)} ETH`
                  )}{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
