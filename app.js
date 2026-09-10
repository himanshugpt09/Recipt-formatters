
function parseAmount(raw){
    parsed = Number(raw)
    isInvaild = raw.trim() === "" | Number.isNaN(parsed);

    if(isInvaild){
        return null;
    }
    else{
        return parsed;
    }
    
}

function formatCurrency(amount){
    return "$" + amount.toFixed(2);
}

const receiptLines = ["12.99", "8.50", "ERR", "3.25", "", "20.00"];

for(const value of receiptLines){
    const result = parseAmount(value);
    if(result===null){
        console.log("invalid");
        continue 
    }
    else{
        console.log(formatCurrency(result));
    }
}

