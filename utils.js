function getDateFromBirthday(bday) {
    if (!bday) {
        return null;
    }

    const [day, month] = bday.split('.');
    const date = new Date();

    date.setMonth(month - 1);
    date.setDate(day);

    return date;
}

function getNameFromCompare(friend) {
    let name = '';

    if (friend.first_name) {
        name += friend.first_name;
    }

    if (friend.last_name) {
        name += friend.last_name;
    }

    return name;
}

export function sortByBDate(list) {
    return list.sort((a, b) => {
        if (!a.bdate) {
            return 1
        } else if (!b.bdate) {
            return -1;
        }

        const aDate = getDateFromBirthday(a.bdate);
        const bDate = getDateFromBirthday(b.bdate);

        return aDate - bDate;
    });
}

export function sortByName(list) {
    return list.sort((a, b) => {
        const aName = getNameFromCompare(a);
        const bName = getNameFromCompare(b);

        return aName.localeCompare(bName);
    })
}