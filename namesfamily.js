const familynames=["Oluchukwu","oluchukwu","Chinedu","chinedu","Ihemugabu","ihemugabu","favour","Favour","Victor","victor","Benjamine","benjamine","Onyinye","onyinye","Chimaloge",
    "chimaloge","Chidindu","chidindu", "Chidimma","chidimma","Nwaamara","nwaamara","francis","Francis","chinecherem","Chinecherem" ,"Ester", "esther"]
    const familyages=[2024 - 2002,2024-2002,2024-2004,2024-2004,2024-2006,2024-2006,2024-2008,2024-2008,2024-2008,2024-2008,2024-2010,2024-2010,2024-2012,2024-2012,2024-2017,2024-2017,
        2024-2021,2024-2021,2024-2022,2024-2022,1,1,"forty-something","forty-something",2,2, "you don't"]
        console.log(familyages)
    const name= prompt("what is your name please")

        let get=""
    for(let i=0; i< familynames.length;i++){
        if(name===familynames[i] && familynames.includes(name)){
            const ages= prompt("how old are you")
            if(familyages[i]==ages){
                 get=`${name}, yes, you are ${ages} years old, you are among Nwangbo's family, go in and feel at home, serve yourself and eat and drink as you like but don't foget you must pray always.thanks `
                console.log(get)
            }else if(!familyages.includes(ages)){
                 get=`${name},no, you are not ${ages} years old, you are among Nwangbo's family, go in and feel at home, serve yourself and eat and drink as you like but don't foget you must pray always.thanks `
                console.log(get)
            }

        }else if(!familynames.includes(name)){
            get=`${name} , you are not among Nwangbo's family but if you want to belong to the family go and meet Nwangbo Francis to register you thanks`
            console.log(get)
        }
    }


















