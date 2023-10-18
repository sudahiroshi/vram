
let mem_length = 32;
let mem = new Uint8Array( mem_length );
for( let i=0; i<mem_length; i++ )   mem[i] = i;

set_memory( 0, mem, mem_length );

function padding8( number ) {
    if( number )
        return ('0' + number.toString(16)).slice(-2).toUpperCase();
    else if( number == 0 )  return '00';
    else return '----';
}

function padding16( number ) {
    if( number )
        return ('000' + number.toString(16)).slice(-4).toUpperCase();
    else if( number == 0 )  return '0000';
    else return '----';
}

function padding_bin8( number ) {
    if( number )
        return ('00000000' + number.toString(2)).slice(-8);
    else if( number == 0 )  return '00000000';
    else return '----';
}

/**
 * メモリの表示領域を作成する
 * @param {number} address 開始アドレス
 * @param {Uint8Array} mem メモリの内容
 * @param {number} length 表示錠確保する長さ
 */
function set_memory( address, mem, length ) {
    let memory = document.querySelector('#memory_view1');

    for( let i=0; i<length; i++ ) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.classList.add('address');
        td1.innerText = padding16( address+i );
        let td2 = document.createElement('td');
        td2.classList.add('mem_value');
        td2.innerText = padding8(mem[i]);
        let td3 = document.createElement('td');
        td3.classList.add('mem_binary');
        td3.innerText = padding_bin8(mem[i]);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        memory.appendChild(tr);
    }
}