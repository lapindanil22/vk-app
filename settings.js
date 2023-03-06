let friendsSort = localStorage.friendsSort || 'name';

export function setFriendSort(sort) {
    friendsSort = sort;
    localStorage.friendsSort = sort;
}

export function getFriendSort() {
    return friendsSort;
}