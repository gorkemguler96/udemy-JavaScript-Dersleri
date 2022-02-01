
function Question(hobby){
    switch (hobby){
        case 'car':
            return function (name){
                console.log( name+' Araban var mı?')
            }
            break;

        case 'book':
            return function (name){
                console.log( name+' Hangi kitaplari okursun?')
            }
        break;

        case 'software':
            return function (name,know){
                console.log( name+' React biliyor musun ? '+know)
            }
            break;

        default:
            return function (name){
                console.log( name+' Naber?')
            }
    }
}

let carQuestion = Question('car');

carQuestion('gorkem');

let bookQuestion = Question('book');

bookQuestion("Fatma")

let softwareQuestion = Question('software');

softwareQuestion('Gorkem',"kesinlikle öğren")
