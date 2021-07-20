const thuchienpheptinh ={
    pheptinhcongcua4so : function(sothu1,sothu2,sothu3,sothu4){
        return sothu1+sothu2+sothu3+sothu4
    },
    pheptinhtrucua4so : function(sothu1,sothu2,sothu3,sothu4){
        return sothu1-sothu2-sothu3-sothu4
    }, pheptinhnhancua4so : function(sothu1,sothu2,sothu3,sothu4){
        return sothu1*sothu2*sothu3*sothu4
    }, pheptinhchiacua4so : function(sothu1,sothu2,sothu3,sothu4){
        return sothu1/sothu2/sothu3/sothu4
    },
}
console.log(thuchienpheptinh.pheptinhcongcua4so(Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())))

console.log(thuchienpheptinh.pheptinhtrucua4so(Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())))

console.log(thuchienpheptinh.pheptinhnhancua4so(Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())))

console.log(thuchienpheptinh.pheptinhchiacua4so(Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())))
