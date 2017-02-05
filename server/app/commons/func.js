export default {
    ucFirst: function (str) {
        if (!!str) return str[0].toUpperCase() + str.substr(1);
        else return str;
    }
}