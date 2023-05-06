let names= ['harish' ,'Kumar', 'Suthar'];
let j=1;
for(i=0;i<names.length;i++){
    let  html = `<div>${names[i]}</div>`;
    if(names[i].includes('h')){
        console.log(names[i]+ ' containes h');
    }
    console.log(j);
    j++;
}

