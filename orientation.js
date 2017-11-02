export const orientate = (position, direction) => {

    var directions = ['N','E','S','W'];

    if(position === 'R') {
        let index = directions.indexOf(direction)+1
        if(directions.length === index) index = 0
        return directions[index]
    } else {
        let index = directions.indexOf(direction)-1
        if(index === -1) index = (directions.length-1)
        return directions[index]
    }

}