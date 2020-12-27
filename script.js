//Напишите функцию compareNumbers, которая сравнивает два целых числа. Пусть эта функция возвращает один символ "<", если A < B, ">", если A > B и "=", если A===B.

function compareNumbers(a,b) {
    if (a < b) {
        console.log("<")
    } else if (a > b) {
        console.log(">")
    } else {
        console.log("=")
    }

}
const numbers = compareNumbers(3,5)

/*Требуется написать функцию airConditioning с тремя аргументами: troom - нынешняя температуре в комнате, tcond - желаемая температура и mode - режим работы который определяет как работать кондиционеру. Функция должна возвратить какая температура будет в комнате благодаря работе кондиционера

Кондиционер может работать в следующих четырех режимах:

«freeze» — охлаждение. В этом режиме кондиционер может только уменьшать температуру. Если температура в комнате и так не больше желаемой, то он выключается.
«heat» — нагрев. В этом режиме кондиционер может только увеличивать температуру. Если температура в комнате и так не меньше желаемой, то он выключается.
«auto» — автоматический режим. В этом режиме кондиционер может как увеличивать, так и уменьшать температуру в комнате до желаемой.
«fan» — вентиляция. В этом режиме кондиционер осуществляет только вентиляцию воздуха и не изменяет температуру в комнате.

я переименовала аргументы, чтобы понятней было! */

const airConditioning = (currentTemperature, desiredTemperature, mode) => {
    switch(mode) {
        case 'freeze': 
            currentTemperature < desiredTemperature && console.log('Выключился!')
            break

        case 'heat': 
            currentTemperature > desiredTemperature && console.log('Выключился!')
            break

        case 'auto': 
            if (currentTemperature === desiredTemperature) {
                console.log('Выключился!')
            } else if (currentTemperature > desiredTemperature) {
                console.log(`Остуди до ${desiredTemperature}`)
            } else {
                console.log(`Согрей до ${desiredTemperature}`)
            }
            break

        case 'fan': 
            console.log('Вентиляция воздуха!')
            break

        default:
            return mode
    }
}

airConditioning(20, 10, 'fan')