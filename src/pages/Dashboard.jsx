import { Card } from "flowbite-react";
import AppLayout from "../components/layouts/AppLayout";
export default function Dashboard() {
  return (
    <AppLayout>
      <Card className="">
        <p className="font-normal text-gray-500">いらしゃいませ、</p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          クラスコネクト
        </h5>
      </Card>
      <div className="grid gap-4 grid-cols-3 mt-4">
        <Card className="col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            クラス
          </h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <Card>
              <h1>火曜日</h1>
              <p>07:00 10/09/2024 - 24:00 10/11/2024</p>
              <p>回答者数: 23/40</p>
            </Card>
            <Card>
              <h1>火曜日</h1>
              <p>07:00 10/09/2024 - 24:00 10/11/2024</p>
              <p>回答者数: 23/40</p>
            </Card>
            <Card>
              <h1>火曜日</h1>
              <p>07:00 10/09/2024 - 24:00 10/11/2024</p>
              <p>回答者数: 23/40</p>
            </Card>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <Card>
              <h1>火曜日</h1>
              <p>07:00 10/09/2024 - 24:00 10/11/2024</p>
              <p>回答者数: 23/40</p>
            </Card>
            <Card>
              <h1>火曜日</h1>
              <p>07:00 10/09/2024 - 24:00 10/11/2024</p>
              <p>回答者数: 23/40</p>
            </Card>
            <Card>
              <h1>火曜日</h1>
              <p>07:00 10/09/2024 - 24:00 10/11/2024</p>
              <p>回答者数: 23/40</p>
            </Card>
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            今日
          </h2>
          <Card>
            <div>07:00 - ITSS水２</div>
            <div>何かを学ぶ</div>
          </Card>
          <Card>
            <div>07:00 - ITSS水２</div>
            <div>何かを学ぶ</div>
          </Card>
          <Card>
            <div>07:00 - ITSS水２</div>
            <div>何かを学ぶ</div>
          </Card>
          <Card>
            <div>07:00 - ITSS水２</div>
            <div>何かを学ぶ</div>
          </Card>
          <Card>
            <div>07:00 - ITSS水２</div>
            <div>何かを学ぶ</div>
          </Card>
        </Card>
      </div>
    </AppLayout>
  );
}
