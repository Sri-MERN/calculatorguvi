let div=tn('div')

    let par=tn('h1')
    par.setAttribute('id','title')
    par.innerHTML='Calculator'

    let des=tn('p')
    des.setAttribute('id','description')
    des.innerHTML='This the Calculator developed by DOM manipulation'

    let tbl=tn('table')
    tbl.setAttribute('id','table')

    let tbd=tn('tbody')

    let tr=tn('tr')
    let th1=tn('td')
    th1.setAttribute('colspan','4')
    let display=tn('input')
    display.setAttribute('type','text')
    display.setAttribute('id','result')
    display.setAttribute('readonly','')
    th1.append(display)
    tr.append(th1)

    let tr1=tn('tr')
    let td11=tn('td')
    let btn11=tn('button')
    btn11.setAttribute('onclick','return false')
    btn11.setAttribute('id','clear')
    btn11.innerHTML='c'
    let td12=tn('td')
    let btn12=tn('button')
    btn12.setAttribute('onclick','return false')
    btn12.setAttribute('id','del')
    btn12.innerHTML='del'
    let td13=tn('td')
    let btn13=tn('button')
    btn13.setAttribute('onclick','return false')
    btn13.setAttribute('id','.')
    btn13.innerHTML='.'
    let td14=tn('td')
    let btn14=tn('button')
    btn14.setAttribute('id','*')
    btn14.setAttribute('value','*')
    btn14.setAttribute('onclick','return false')
    btn14.innerHTML='*'
    td11.append(btn11)
    td12.append(btn12)
    td13.append(btn13)
    td14.append(btn14)
    tr1.append(td11,td12,td13,td14)

    let tr2=tn('tr')
    let td21=tn('td')
    let btn21=tn('button')
    btn21.setAttribute('onclick','return false')
    btn21.setAttribute('id','7')
    btn21.setAttribute('value','7')
    btn21.innerHTML='7'
    let td22=tn('td')
    let btn22=tn('button')
    btn22.setAttribute('onclick','return false')
    btn22.setAttribute('id','8')
    btn22.setAttribute('value','8')
    btn22.innerHTML='8'
    let td23=tn('td')
    let btn23=tn('button')
    btn23.setAttribute('onclick','return false')
    btn23.setAttribute('id','9')
    btn23.setAttribute('value','9')
    btn23.innerHTML='9'
    let td24=tn('td')
    let btn24=tn('button')
    btn24.setAttribute('onclick','return false')
    btn24.setAttribute('id','/')
    btn24.setAttribute('value','/')
    btn24.innerHTML='/'
    td21.append(btn21)
    td22.append(btn22)
    td23.append(btn23)
    td24.append(btn24)
    tr2.append(td21,td22,td23,td24)

    let tr3=tn('tr')
    let td31=tn('td')
    let btn31=tn('button')
    btn31.setAttribute('onclick','return false')
    btn31.setAttribute('id','4')
    btn31.setAttribute('value','4')
    btn31.innerHTML='4'
    let td32=tn('td')
    let btn32=tn('button')
    btn32.setAttribute('onclick','return false')
    btn32.setAttribute('id','5')
    btn32.setAttribute('value','5')
    btn32.innerHTML='5'
    let td33=tn('td')
    let btn33=tn('button')
    btn33.setAttribute('onclick','return false')
    btn33.setAttribute('id','6')
    btn33.setAttribute('value','6')
    btn33.innerHTML='6'
    let td34=tn('td')
    let btn34=tn('button')
    btn34.setAttribute('onclick','return false')
    btn34.setAttribute('id','subtract')
    btn34.setAttribute('value','-')
    btn34.innerHTML='-'
    td31.append(btn31)
    td32.append(btn32)
    td33.append(btn33)
    td34.append(btn34)
    tr3.append(td31,td32,td33,td34)

    let tr4=tn('tr')
    let td41=tn('td')
    let btn41=tn('button')
    btn41.setAttribute('onclick','return false')
    btn41.setAttribute('id','1')
    btn41.setAttribute('value','1')
    btn41.innerHTML='1'
    let td42=tn('td')
    let btn42=tn('button')
    btn42.setAttribute('onclick','return false')
    btn42.setAttribute('id','2')
    btn42.setAttribute('value','2')
    btn42.innerHTML='2'
    let td43=tn('td')
    let btn43=tn('button')
    btn43.setAttribute('onclick','return false')
    btn43.setAttribute('id','3')
    btn43.setAttribute('value','3')
    btn43.innerHTML='3'
    let td44=tn('td')
    let btn44=tn('button')
    btn44.setAttribute('onclick','return false')
    btn44.setAttribute('id','add')
    btn44.setAttribute('value','+')
    btn44.innerHTML='+'
    td41.append(btn41)
    td42.append(btn42)
    td43.append(btn43)
    td44.append(btn44)
    tr4.append(td41,td42,td43,td44)

    let tr5=tn('tr')
    let td51=tn('td')
    let btn51=tn('button')
    btn51.setAttribute('onclick','return false')
    btn51.setAttribute('id','0')
    btn51.setAttribute('value','0')
    btn51.innerHTML='0'
    let td52=tn('td')
    let btn52=tn('button')
    btn52.setAttribute('onclick','return false')
    btn52.setAttribute('id','00')
    btn52.setAttribute('value','00')
    btn52.innerHTML='00'
    let td53=tn('td')
    td53.setAttribute('colspan','2')
    let btn53=tn('button')
    btn53.setAttribute('class','btn btn-primary')
    btn53.setAttribute('id','equal')
    btn53.setAttribute('value','=')
    btn53.setAttribute('onclick','return false')
    btn53.innerHTML='='
    let td54=tn('td')
    td51.append(btn51)
    td52.append(btn52)
    td53.append(btn53)
    tr5.append(td51,td52,td53)


    tbd.append(tr,tr1,tr2,tr3,tr4,tr5)

    tbl.append(tbd)



    div.append(par,des,tbl)

    document.body.append(div)


    function tn(tg){
        let res=document.createElement(tg)
        return res
    }

    let string=''
    let buttons=document.querySelectorAll('button')
    Array.from(buttons).forEach((item)=>{
        item.addEventListener('click',(eve)=>{
            if(eve.target.innerHTML=="="){
                string=eval(string)
                document.querySelector('input').value=string
            }
            else if(eve.target.innerHTML=="c" ){
                string=''
                document.querySelector('input').value=string
            }
            else if(eve.target.innerHTML=="del" ){
                string=string.slice(0,-1)
                document.querySelector('input').value=string
            }
            else{
                console.log(eve.target)
                string=string+eve.target.innerHTML
                document.querySelector('input').value=string
            }
        })
    })

    let keyinp=document.getElementById('result')
    document.addEventListener('keydown',(even)=>{
        // console.log(even.key)
        if(even.key=='1'){keyinp.value += even.key}
        if(even.key=='2'){keyinp.value += even.key}
        if(even.key=='3'){keyinp.value += even.key}
        if(even.key=='4'){keyinp.value += even.key}
        if(even.key=='5'){keyinp.value += even.key}
        if(even.key=='6'){keyinp.value += even.key}
        if(even.key=='7'){keyinp.value += even.key}
        if(even.key=='8'){keyinp.value += even.key}
        if(even.key=='9'){keyinp.value += even.key}
        if(even.key=='0'){keyinp.value += even.key}
        if(even.key=='.'){keyinp.value += even.key}
        if(even.key=='+'){keyinp.value += even.key}
        if(even.key=='-'){keyinp.value += even.key}
        if(even.key=='/'){keyinp.value += even.key}
        if(even.key=='*'){keyinp.value += even.key}
        if(even.key=='Backspace'){keyinp.value = keyinp.value.slice(0,-1)}
        if(even.key=='='){keyinp.value=eval(keyinp.value)}
        if(even.key=='Enter'){keyinp.value=eval(keyinp.value)}
        if(even.key=='c'){keyinp.value=''}
    })