document.getElementById('checkButton').addEventListener('click', function() {
    const list1 = document.getElementById('list1').value.split('\n').map(item => item.trim()).filter(item => item !== "");
    const list2 = document.getElementById('list2').value.split('\n').map(item => item.trim()).filter(item => item !== "");

    const countOccurrences = arr => arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});

    const list1Counts = countOccurrences(list1);
    const list2Counts = countOccurrences(list2);

    const allItems = new Set([...list1, ...list2]);

    const differences = [];

    allItems.forEach(item => {
        if (list1Counts[item] !== list2Counts[item]) {
            differences.push(item);
        }
    });

    let resultText = differences.length > 0 ? differences.join(', ') : 'No differences';

    document.getElementById('result').innerText = resultText;
});
