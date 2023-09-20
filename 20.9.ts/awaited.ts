type DataResponse = Promise<{ message: string; status: number }>;
async function getData(): Promise<DataResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({ message: "success", status: 200 });
    }, 3000);
  });
}

async function init() {
  const result: Awaited<DataResponse> = await getData();
  console.log(result.message, result.status);
}

init();
