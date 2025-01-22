import { arr } from "./db.js"


let container = document.querySelector(".container");

function relodadTable() {

    for (let item of arr) {

        let div__box = document.createElement("div")
        let table = document.createElement("table")
        let thead = document.createElement("thead")
        let tr = document.createElement("tr")
        let title = document.createElement("th")
        let description = document.createElement("th")
        let date = document.createElement("th")
        let time = document.createElement("th")
        let done = document.createElement("th")
        let tbody = document.createElement("tbody")
        let tr_2 = document.createElement("tr")
        let pp = document.createElement("td")
        let tx = document.createElement("td")
        let th = document.createElement("td")
        let num = document.createElement("td")
        let pppp = document.createElement("td")

        container.classList.add("container`")
        div__box.classList.add('box')
        tr_2.classList.add('tdd')
        pp.classList.add('pp')
        tx.classList.add('tx')
        th.classList.add('th')
        num.classList.add('num')
        pppp.classList.add('pppp')


        if (item.done === 'В прогрессе') {
            pppp.classList.add('in-progress'); 
        } else if (item.done === 'Не выполнено') {
            pppp.classList.add('not-done');
        }

        pp.textContent = item.title;
        tx.textContent = item.description;
        th.textContent = item.date;
        num.textContent = item.time;
        pppp.textContent = item.done

        container.append(div__box)
        div__box.append(table)
        table.append(thead, tbody)
        thead.append(tr)
        tr.append(title, description, date, time, done)
        title.textContent = 'Заголовок задачи'
        description.textContent = 'Описание задачи'
        date.textContent = 'Дата'
        time.textContent = 'Время'
        done.textContent = 'Выполнено'
        tbody.append(tr_2)
        tr_2.append(pp, tx, th, num, pppp)
        pppp.textContent = item.done
    }

}

relodadTable()