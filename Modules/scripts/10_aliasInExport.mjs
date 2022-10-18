const company = "PT. CINTA SEJATI";
function sum(pertama,kedua) {
    return pertama + kedua
}

class Company {
    constructor(name){
        this.name = name
    }
}

export{company,Company,sum}

export{company as perusahaan, sum as total, Company as Perusahaan}
//ingat saat di import nanti pakai kata aliasnya bukan nama aslinya
