import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/popper.js/dist/popper.js'
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

const EditStatus = () => {
    //year, month, day, hour, minute

    //year
    const year = [2019,2020,2021]
    const month = []
    const day = []
    const hour = [0]
    const minute = [0]

    for(let i=1;i<60;i++){
        if(i <= 12) {
            //0なし
            month[i-1] = i
        }
        if(i < 24) {
            hour[i] = i;
        }
        if(i <= 31) {
            //0なし
            day[i-1] = i
        }
        minute[i] = i
    }
    console.log(minute[59])

    function submitTask() {
        //ドキュメント定義
        const documentYear = document.getElementById('selectYear')
        const documentMonth = document.getElementById('selectMonth')
        const documentDay = document.getElementById('selectDay')
        
        //値の参照
        const valYear = documentYear[documentYear.selectedIndex].value
        const valMonth = documentMonth[documentMonth.selectedIndex].value
        const valDay = documentDay[documentDay.selectedIndex].value
        //const getform = document.getElementById('Forms')
        alert('error')
        documentYear.removeChild(documentYear.childNodes[1])
        console.log(valYear, valMonth, valDay)
    }

    return(
        <div>
            {/* ナビバー周辺 */}
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <a href="./"><h4 className="navbar-brand col-1 py-2">Title</h4></a>
            <a href="#" className="nav-item nav-link text-light offset-1">Home</a>
            <a href="#" className="nav-item nav-link text-light">My-Tasks</a>
        </nav>

            {/* アコーディオン(コラプス) */}
        <div className="accordion col-6 offset-3" id="accordion-4">
            <div className="card">
                <div className="card-header" id="header-4">
                    <button className="btn btn-link" type="button"
                        data-toggle="collapse" data-target="#exampleAcc"
                        aria-expanded="true" aria-controls="exampleAcc">
                            押すと開きます。
                    </button>
                </div>
                <div className="collapse" id="exampleAcc"
                    aria-labelledby="header-4" data-parent="#accordion-4">
                    <div className="card-body">Hello!</div>
                    <button className="btn btn-primary">おはようござまします</button>
                </div>
            </div>
        </div>

            {/* フォーム */}
        <form id="Forms">
        <div className="form-row align-item-center mt-4">
            <select id="selectYear" className="form-control col-1 offset-3">
                {year.map((year) => {
                    return <option key={"hour" + year.toString()}>{year}</option>
                })}
            </select>
            <p>年</p>
            <select id="selectMonth" className="form-control col-1">
                {month.map((month) => {
                    return <option key={"hour" + month.toString()}>{month}</option>
                })}
            </select>
            <p>月</p>
            <select id="selectDay" className="form-control col-1">
                {day.map((day) => {
                    return <option key={"hour" + day.toString()}>{day}</option>
                })}
            </select>
            <p>日</p>
            <select id="selecthour" className="form-control col-1">
                {hour.map((hour) => {
                    return <option key={"hour" + hour.toString()}>{hour}</option>
                })}
            </select>
            <p>時</p>
            <select id="selectMinute" className="form-control col-1">
                {minute.map((minute) => {
                    return <option key={"hour" + minute.toString()}>{minute}</option>
                })}
            </select>
            <p>分</p>
            <button type="button" className="btn btn-primary" onClick={() => {submitTask()}}>送信する</button>
        </div>
        </form>

        </div>
    )
}

ReactDOM.render(
    <EditStatus />,
    document.getElementById('root')
)

//月のonchange２の関数を実行

//１．タスクの分割
//コンポーネントを作っていこう

//２．フォームの処理
//2-1.年月から追加、消去する日を判定
//new dateとかタイムスタンプではやらず、うるう年の判定をし、正しければ一日増やす
//2-2.指定した日数になるまで追加、消去する処理の追加

//3. 確定ボタンで通知予約できるようにする
//setTimeoutでnode-notifierが動くようにする