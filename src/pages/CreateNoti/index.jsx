const CreateNotification = () => {
    
  return (
    <div className="flex items-center justify-center bg-gray-300">
      <form className="flex flex-col w-7/12 bg-white gap-y-20 my-20 rounded-md shadow-lg">
        <div className="flex items-center justify-center pt-20">
          <h2 className="border-2 px-40 py-2 text-4xl rounded-full">
            通知の作成
          </h2>
        </div>

        <div className="flex flex-col items-center gap-y-10">
          <div className="flex w-8/12 gap-x-10">
            <label className="text-2xl w-40">クラス:</label>
            <input
              className="rounded-md border-2 border-slate-400 w-full text-center text-xl"
              placeholder="ITSS "
            />
          </div>
          <div className="flex w-8/12 gap-x-10">
            <label className="text-2xl w-40">通知:</label>
            <input
              className="rounded-md border-2 border-slate-400 w-full text-center text-xl"
              placeholder="ITSS "
            />
          </div>
          <div className="flex w-8/12 gap-x-10">
            <label className="text-2xl w-40">説明する:</label>
            <textarea
              rows={6}
              className="rounded-md border-2 border-slate-400 w-full text-center text-xl"
              placeholder="ITSS "
            />
          </div>
          <div className="flex justify-between w-8/12 items-center mb-16">
            <div className="flex items-center gap-x-4">
              <p>開始日:</p>
              <input type="date"></input>
            </div>
            <div className="flex items-center gap-x-4">
              <p>終了日:</p>
              <input type="date"/>
            </div>
          </div>
          <button className="place-self-end w-1/6 -translate-x-44 border-blue-600 border-2 rounded-full text-xl">添付</button>
          <button className="place-self-end w-1/6 -translate-x-44 bg-blue-700 text-white text-xl rounded-md p-2 mb-20">完了</button>
        </div>
      </form>
    </div>
  );
};

export default CreateNotification;
