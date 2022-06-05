import React, { useState, useEffect } from "react";

const AddCoin = () => {
  const [coin, setCoin] = useState("");
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const temp = localStorage.getItem("coins");
    const loadedCoins = JSON.parse(temp);

    loadedCoins && setCoins(loadedCoins);
  }, []);

  const addCoin = (e) => {
    e.preventDefault();

    if (coin.length === 0) return;

    let list = [
      ...coins,
      {
        id: new Date(),
        name: coin,
      },
    ];

    localStorage.setItem("coins", JSON.stringify(list));
    setCoins(list);
    setCoin("");
  };

  const deleteCoin = (id) => {
    const updatedCoins = [...coins].filter((coin) => coin.id !== id);
    localStorage.setItem("coins", JSON.stringify(updatedCoins));

    setCoins(updatedCoins);
  };

  return (
    <div>
      <section>
        <div className="flex">
          <div className="max-w-xs">
            <label
              htmlFor="wallet"
              className="block text-sm font-medium text-gray-700"
            >
              Ticker
            </label>
            <div className="mt-1 relative rounded-md shadow-md">
              <input
                type="text"
                name="wallet"
                id="wallet"
                value={coin}
                onChange={(e) => setCoin(e.target.value)}
                className="block w-full pr-10 p-2 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
                placeholder="For example DOGE"
              />
            </div>
            <div className="flex bg-white p-2 rounded-md shadow-md flex-wrap">
              <span className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
                BTC
              </span>
              <span className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
                DOGE
              </span>
              <span className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
                BCH
              </span>
              <span className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
                CHD
              </span>
            </div>
            <div className={`text-sm text-red-600 mt-2`}>
              This ticker has already been added.
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={addCoin}
          className="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg
            className="-ml-0.5 mr-2 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#ffffff"
          >
            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
          </svg>
          Add
        </button>
      </section>

      <hr className="w-full border-t border-gray-600 my-4" />

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"
          >
            <div className="px-4 py-5 sm:p-6 text-center">
              <dt className="text-sm font-medium text-gray-500 truncate">
                {coin.name} - USD
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                1.11
              </dd>
            </div>
            <div className="w-full border-t border-gray-200"></div>
            <button
              onClick={() => deleteCoin(coin.id)}
              className="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#718096"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Delete
            </button>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default AddCoin;
