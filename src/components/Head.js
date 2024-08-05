import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img className="h-8 mx-2"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAADTCAMAAAAs2dbrAAAAWlBMVEX///8AAAD8/Pyenp4UFBRmZmbp6emDg4PNzc3ExMT29vbj4+NTU1NBQUHs7OwcHBxISEiUlJQtLS1vb2+urq6Ojo7a2tqkpKQPDw90dHRbW1s2NjYjIyPT09O5PeCqAAACX0lEQVR4nO3d7XKiQBCF4UFUEBCRqEiSvf/bXI27lar86BnmT9Od97mCcwpBPrpmQgAAAAAAAAAAAAAAAIhq6stUrtt0qZsFjdrzbhi3azcOu3ObeozOw72w4T6ck45V3221oy6w7fqEo3TSjrnQKX6krFV6lIpVetNOmOFNrtRq58siX/067XhZOqlSo50uk3SZuGiHy3QROs3a4TLNQqejdrhMR6HTqB0u0yh0+tAOl+lD6PSuHS7Tu9Dpqh0u01XoVGuHy/RH6BS0w2WSKoVSO12WUuxk80DJlcJNO1+GW6RTmLQTLjbFKj1OKVtPuqfIyfRyOFp5bVQU9+MhpVII+2v3qR02yWd33adVeminat6t3VxNqa8s/9n0+3XrN8sKAQAAAAAAADBts37LCjV9XVZrV9Z9+pBvU1uZ0ZlTR5dvlXbUBaroR8Kng62ho5QPUAdbnwmL4hQt1doboxpjX6EsThxJ00bPX552vizyr8/W9eE/aSTR6Ci2PIxtc9xIHjjaaYfLtBM6eZwdtffn9PLbZnw9nk8er3se/5883ke4vN/zeF/u8vnJ43Puo9SgnXKRtIFYh++NXL7fCx7fw37RfhmeYFkhAAAAAAAAAKa5W5fA3/oRDtf5cLgei8N1cxyub+RxHSrtfFkiJ5N2vCzyKaWdLpNUyeM6iR7Xs7Q4bfQkTRx5nB21N0D1Is342hxJlIcSrczk/CSti+1x/XKP68x73A/A6DB25BHe4f4aLvdBCY2N1yvfEvar8bivkMv9n4LHfbq+jpW7/dQAAAAAAAAAAAAAAMCv9Rfgq2Ts2uxyuwAAAABJRU5ErkJggg=="
        />

        <img className="h-8 mx-2"
          alt="myYouTube"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        />
      </div>

      <div className="col-span-10 px-10">
        <input placeholder="Search" className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
      </div>
      <div>
        <img className="h-8 col-span-1"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
    </div>
  );
};

export default Head;
