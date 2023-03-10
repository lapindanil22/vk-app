import View from '../view.js';
import * as utils from '../utils.js';
import * as settings from '../settings.js';

const resultsNode = document.querySelector('#results');
let items = [];
let sorting = settings.getFriendSort();

export default {
    setData(newItems) {
        items = newItems;
    },

    setSorting(newSorting) {
        sorting = newSorting;
        settings.setFriendSort(newSorting);
    },

    render() {
        if (sorting === 'name') {
            utils.sortByName(items);
        } else if (sorting === 'bdate') {
            utils.sortByBDate(items);
        }

        resultsNode.innerHTML = View.render('friends', { list: items });
        const sort = resultsNode.querySelector('[data-role=sort]');

        sort.value = sorting;
        sort.addEventListener('change', e => {
            this.setSorting(e.target.value);
            this.render();
        })
    }
}