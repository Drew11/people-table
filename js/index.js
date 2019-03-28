    'use strict';

    const people = [
        {
            "name": "Carolus Haverbeke",
            "sex": "m",
            "born": 1832,
            "died": 1905,
            "father": "Carel Haverbeke",
            "mother": "Maria van Brussel"
        },
        {
            "name": "Emma de Milliano",
            "sex": "f",
            "born": 1876,
            "died": 1956,
            "father": "Petrus de Milliano",
            "mother": "Sophia van Damme"
        },
        {
            "name": "Maria de Rycke",
            "sex": "f",
            "born": 1683,
            "died": 1724,
            "father": "Frederik de Rycke",
            "mother": "Laurentia van Vlaenderen"
        },
        {
            "name": "Jan van Brussel",
            "sex": "m",
            "born": 1714,
            "died": 1748,
            "father": "Jacobus van Brussel",
            "mother": "Joanna van Rooten"
        },
        {
            "name": "Philibert Haverbeke",
            "sex": "m",
            "born": 1907,
            "died": 1997,
            "father": "Emile Haverbeke",
            "mother": "Emma de Milliano"
        },
        {
            "name": "Jan Frans van Brussel",
            "sex": "m",
            "born": 1761,
            "died": 1833,
            "father": "Jacobus Bernardus van Brussel",
            "mother": null
        },
        {
            "name": "Pauwels van Haverbeke",
            "sex": "m",
            "born": 1535,
            "died": 1582,
            "father": "N. van Haverbeke",
            "mother": null
        },
        {
            "name": "Clara Aernoudts",
            "sex": "f",
            "born": 1918,
            "died": 2012,
            "father": "Henry Aernoudts",
            "mother": "Sidonie Coene"
        },
        {
            "name": "Emile Haverbeke",
            "sex": "m",
            "born": 1877,
            "died": 1968,
            "father": "Carolus Haverbeke",
            "mother": "Maria Sturm"
        },
        {
            "name": "Lieven de Causmaecker",
            "sex": "m",
            "born": 1696,
            "died": 1724,
            "father": "Carel de Causmaecker",
            "mother": "Joanna Claes"
        },
        {
            "name": "Pieter Haverbeke",
            "sex": "m",
            "born": 1602,
            "died": 1642,
            "father": "Lieven van Haverbeke",
            "mother": null
        },
        {
            "name": "Livina Haverbeke",
            "sex": "f",
            "born": 1692,
            "died": 1743,
            "father": "Daniel Haverbeke",
            "mother": "Joanna de Pape"
        },
        {
            "name": "Pieter Bernard Haverbeke",
            "sex": "m",
            "born": 1695,
            "died": 1762,
            "father": "Willem Haverbeke",
            "mother": "Petronella Wauters"
        },
        {
            "name": "Lieven van Haverbeke",
            "sex": "m",
            "born": 1570,
            "died": 1636,
            "father": "Pauwels van Haverbeke",
            "mother": "Lievijne Jans"
        },
        {
            "name": "Joanna de Causmaecker",
            "sex": "f",
            "born": 1762,
            "died": 1807,
            "father": "Bernardus de Causmaecker",
            "mother": null
        },
        {
            "name": "Willem Haverbeke",
            "sex": "m",
            "born": 1668,
            "died": 1731,
            "father": "Lieven Haverbeke",
            "mother": "Elisabeth Hercke"
        },
        {
            "name": "Pieter Antone Haverbeke",
            "sex": "m",
            "born": 1753,
            "died": 1798,
            "father": "Jan Francies Haverbeke",
            "mother": "Petronella de Decker"
        },
        {
            "name": "Maria van Brussel",
            "sex": "f",
            "born": 1801,
            "died": 1834,
            "father": "Jan Frans van Brussel",
            "mother": "Joanna de Causmaecker"
        },
        {
            "name": "Angela Haverbeke",
            "sex": "f",
            "born": 1728,
            "died": 1734,
            "father": "Pieter Bernard Haverbeke",
            "mother": "Livina de Vrieze"
        },
        {
            "name": "Elisabeth Haverbeke",
            "sex": "f",
            "born": 1711,
            "died": 1754,
            "father": "Jan Haverbeke",
            "mother": "Maria de Rycke"
        },
        {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father": null, "mother": null},
        {
            "name": "Bernardus de Causmaecker",
            "sex": "m",
            "born": 1721,
            "died": 1789,
            "father": "Lieven de Causmaecker",
            "mother": "Livina Haverbeke"
        },
        {
            "name": "Jacoba Lammens",
            "sex": "f",
            "born": 1699,
            "died": 1740,
            "father": "Lieven Lammens",
            "mother": "Livina de Vrieze"
        },
        {
            "name": "Pieter de Decker",
            "sex": "m",
            "born": 1705,
            "died": 1780,
            "father": "Joos de Decker",
            "mother": "Petronella van de Steene"
        },
        {
            "name": "Joanna de Pape",
            "sex": "f",
            "born": 1654,
            "died": 1723,
            "father": "Vincent de Pape",
            "mother": "Petronella Wauters"
        },
        {
            "name": "Daniel Haverbeke",
            "sex": "m",
            "born": 1652,
            "died": 1723,
            "father": "Lieven Haverbeke",
            "mother": "Elisabeth Hercke"
        },
        {
            "name": "Lieven Haverbeke",
            "sex": "m",
            "born": 1631,
            "died": 1676,
            "father": "Pieter Haverbeke",
            "mother": "Anna van Hecke"
        },
        {
            "name": "Martina de Pape",
            "sex": "f",
            "born": 1666,
            "died": 1727,
            "father": "Vincent de Pape",
            "mother": "Petronella Wauters"
        },
        {
            "name": "Jan Francies Haverbeke",
            "sex": "m",
            "born": 1725,
            "died": 1779,
            "father": "Pieter Bernard Haverbeke",
            "mother": "Livina de Vrieze"
        },
        {
            "name": "Maria Haverbeke",
            "sex": "m",
            "born": 1905,
            "died": 1997,
            "father": "Emile Haverbeke",
            "mother": "Emma de Milliano"
        },
        {
            "name": "Petronella de Decker",
            "sex": "f",
            "born": 1731,
            "died": 1781,
            "father": "Pieter de Decker",
            "mother": "Livina Haverbeke"
        },
        {
            "name": "Livina Sierens",
            "sex": "f",
            "born": 1761,
            "died": 1826,
            "father": "Jan Sierens",
            "mother": "Maria van Waes"
        },
        {
            "name": "Laurentia Haverbeke",
            "sex": "f",
            "born": 1710,
            "died": 1786,
            "father": "Jan Haverbeke",
            "mother": "Maria de Rycke"
        },
        {
            "name": "Carel Haverbeke",
            "sex": "m",
            "born": 1796,
            "died": 1837,
            "father": "Pieter Antone Haverbeke",
            "mother": "Livina Sierens"
        },
        {
            "name": "Elisabeth Hercke",
            "sex": "f",
            "born": 1632,
            "died": 1674,
            "father": "Willem Hercke",
            "mother": "Margriet de Brabander"
        },
        {
            "name": "Jan Haverbeke",
            "sex": "m",
            "born": 1671,
            "died": 1731,
            "father": "Lieven Haverbeke",
            "mother": "Elisabeth Hercke"
        },
        {
            "name": "Anna van Hecke",
            "sex": "f",
            "born": 1607,
            "died": 1670,
            "father": "Paschasius van Hecke",
            "mother": "Martijntken Beelaert"
        },
        {
            "name": "Maria Sturm",
            "sex": "f",
            "born": 1835,
            "died": 1917,
            "father": "Charles Sturm",
            "mother": "Seraphina Spelier"
        },
        {
            "name": "Jacobus Bernardus van Brussel",
            "sex": "m",
            "born": 1736,
            "died": 1809,
            "father": "Jan van Brussel",
            "mother": "Elisabeth Haverbeke"
        }
    ];

    const copyPeople = people.map(a => ({...a}));
    const root = document.querySelector('.people');

    const showPeople = function (root, array) {
        const table = document.createElement('table'),
            tableBody = document.createElement('tbody');

        root.appendChild(table);
        table.appendChild(tableBody);
        table.classList.add('people__table');

        array.forEach(function (current, index, arr) {
                const tr = document.createElement('tr'),
                    age = current['died'] - current['born'],
                    century = (Math.ceil(current['died'] / 100)),
                    child = getChildProperty(arr,current);
                let id = `0${index + 1}`;

                if (id.length > 2) {
                    id = `${index + 1}`;
                }
                current['id'] = id;
                current['age'] = age;
                current['century'] = century;
                current['child'] = child.slice(0, child.length - 2);
                createTableElements(tr,current);
                tableBody.appendChild(tr);
            }
        );

        let tr = document.querySelectorAll('tr');
        let td = document.querySelectorAll('td');

        setOrderColumns(tr, tableBody);
        setStylesChildNames (array, td);
        setTableCaptions(tr[0], tableBody);

        addListenerOnHeaders();
        setSelectedCellStyle(table);
        addInput();
        filterNames(root, array);



    };

    const getChildProperty = function (arrayPeople, currentPerson) {
        let child = '';

        arrayPeople.forEach(function (children) {
            if (currentPerson['sex'] === 'm' && currentPerson['name'] === children['father']) {
                child += children['name'] + ', ';
            }
            if (currentPerson['sex'] === 'f' && currentPerson['name'] ===children['mother']) {
                child += children['name'] + ', ';
            }
        });

        return child;
    };

    const createTableElements  = function(parentEl, currentPerson){
        for (let key in currentPerson) {
            const td = document.createElement('td'),
                textNode = document.createTextNode(currentPerson[key]);
            td.appendChild(textNode);
            td.setAttribute(`data-${key}`, `${key}`);
            parentEl.appendChild(td);

            if (key === 'sex' && currentPerson[key] === 'f') {
                td.parentElement.classList.add('person--female');
            }
            if (key === 'sex' && currentPerson[key] === 'm') {
                td.parentElement.classList.add('person--male');
            }
            if (currentPerson[key] === null) {
                td.removeChild(td.firstChild);
            }
            if (key === 'age' && currentPerson[key] > 65) {
                td.parentElement.classList.add('green-border');
            }
            if (key === 'century' && currentPerson[key]=== 17) {
                td.parentElement.classList.add('person--lived-in-17');
            }
            if (key === 'name' && currentPerson['born'] < 1650) {
                setWrapper(td, currentPerson[key], 'born');
            }
            if (key === 'name' && currentPerson['died'] > 1800) {
                setWrapper(td, currentPerson[key], 'died');
            }
            if (key === 'child' && currentPerson[key]!=='' && currentPerson['sex'] ==='m'){
                td.parentElement.classList.add('person--father');
            }
        }
    };

    const setStylesChildNames = function(array, tCells) {
        let strChild;

        [...tCells].forEach(function (currentCell) {
            array.forEach(function (current) {
                if (currentCell.dataset.child) {
                    strChild = currentCell.textContent;
                    if (strChild.includes(current['name']) && current['died'] > 1800) {
                        setWrapper(currentCell,strChild, 'died');
                    }
                    if (strChild.includes(current['name']) && current['born'] < 1650) {
                        setWrapper(currentCell,strChild, 'born');
                    }
                }
            });
        });
    } ;

    function setWrapper(elem, value, property) {
        elem.removeChild(elem.firstChild);
        const span = document.createElement('span');
        const spanValue = document.createTextNode(`${value}`);
        span.appendChild(spanValue);

        if(property === 'born'){
            setStyleWrapperBorn (span)
        }
        if(property === 'died'){
            setStyleWrapperDied (span)
        }
        elem.appendChild(span);
    }
    function setStyleWrapperBorn(elem) {
        elem.setAttribute('class', 'span--class-through');
    }
    function setStyleWrapperDied(elem) {
        elem.setAttribute('class', 'span--class-bold');
    }


    const setOrderColumns = function (trCollection, parentEl) {
        let array = [...trCollection];

        array.forEach(function (current, index) {
            let tdNames,
                tdIds,
                tdFather,
                tdAge,
                tdCentury;

            [...current.children].forEach(function (value) {
                if (value.dataset.name) {
                    tdNames = value;
                }
                if (value.dataset.id) {
                    tdIds = value;
                }
                if (value.dataset.father) {
                    tdFather = value;
                }
                if (value.dataset.age) {
                    tdAge = value;
                }
                if (value.dataset.century) {
                    tdCentury = value;
                }
            });
            parentEl.children[index].insertBefore(tdIds, tdNames);
            parentEl.children[index].insertBefore(tdAge, tdFather);
            parentEl.children[index].insertBefore(tdCentury, tdFather);
        });
    };

    const setTableCaptions = function (trElement, el) {
        let array = [...trElement.children];
        let table = document.querySelector('.people__table');

        array.forEach(function (current) {
            let caption = document.createElement('th'),
                value,
                captionText;

            value = Object.keys(current.dataset);
            captionText = document.createTextNode(value);
            caption.appendChild(captionText);
            table.insertBefore(caption, el);
            caption.setAttribute('class', 'header');
            caption.setAttribute(`data-${value}`, `${value}`);
        });
    };

    // -=============================Selected Functional========================================-

    const setSelectedCellStyle = function (el) {
        el.addEventListener('click', addBorderStyle());
    };

    function addBorderStyle (){
        let clickedTd;

        return function (event) {
            console.log(clickedTd , event.target);
            if (event.target.tagName !== 'TD') {
                return;
            }
            if (clickedTd) {
                clickedTd.classList.remove('td-border-style');
            }
            clickedTd = event.target;
            event.target.classList.add('td-border-style');
        }
    }


    // -==============================Sort Functional=============================================-
    const addListenerOnHeaders = function () {
        const table = document.querySelector('.people__table');
        table.addEventListener('click', addSortingOnHeaders);
    };

    function addSortingOnHeaders(event){
        if (event.target.tagName !== 'TH') {
            return;
        }
        let fields = [
            "id",
            "name",
            "age",
            "born",
            "died",
        ];
        fields.forEach(function (header) {
            if(event.target.dataset[header]){
                sortingValues(event.target.dataset[header]);
            }
        });
    }

    const sortingValues = function (property) {
        function compareValuesNumber(a, b) {
            return a.textContent - b.textContent;
        }

        function compareValuesString(a, b) {
            if (a.textContent < b.textContent)
                return -1;
            if (a.textContent > b.textContent)
                return 1;
            return 0;
        }

        if (property !== 'name') {
            let filledArrayEl = fillEmptyArrays(property);
            appendSortEl(filledArrayEl, compareValuesNumber);
        }
        if (property === 'name') {
            let filledArrayEl = fillEmptyArrays(property);
            appendSortEl(filledArrayEl, compareValuesString);
        }
    };

    function fillEmptyArrays(property) {
        const td = document.querySelectorAll('td');
        let arrayElements = [];

        [...td].forEach(function (currentEl) {
            if (currentEl.dataset[property] === property) {
                arrayElements.push(currentEl);
            }
        });

        return arrayElements;
    }

    function appendSortEl(arrayEl, funcCompare) {
        const tbody = document.querySelector('tbody');
        arrayEl.sort(funcCompare);
        arrayEl.forEach(function (current) {
            tbody.appendChild(current.parentElement);
        });
    }

    // -=========================Filter Functional========================--

    function  addInput() {
        const th = document.querySelectorAll('th');

        const set = ['name','father', 'mother'];

        [...th].forEach(function (current) {
            set.forEach(function (currentSet) {
                if(current.dataset[currentSet]){
                    const input = document.createElement('input');
                    input.setAttribute(`data-${current.dataset[currentSet]}`, current.dataset[currentSet]);
                    input.value = 'type your request...';
                    input.type = 'text';
                    input.style['color'] = 'gray';
                    input.style['border-radius'] = '5px';
                    input.style['margin-left'] = ' 15px';
                    input.style['padding-left'] = '5px';
                    current.appendChild(input);
                }
            });
        });
    }

    const filterNames = function (root , array) {
        let input = document.querySelectorAll('input');

        [...input].forEach(function (currentInput) {
            currentInput.addEventListener('change',function (event) {
                let arr = fillArray(array, event);
                if(event.target.value ===''){
                    root.removeChild(root.firstElementChild);
                    showPeople(root, copyPeople);
                    return;
                }
                if(arr===undefined){
                    return alert('sorry your request is empty');
                }else{
                    root.removeChild(root.firstElementChild);
                    showPeople(root, arr);
                }
            });
        });
    };

    function fillArray(array, event){
        let searchingArray = [];
        const props = ['name', 'father', 'mother'];
        array.filter(function (person) {
            props.forEach(function (currentProp) {
                if(person[currentProp]!==null && event.target.dataset[currentProp]){
                    if(person[currentProp].includes(event.target.value)){
                        searchingArray.push(person);
                    }
                }
            });
        });
        if(searchingArray.length!==0){
            return searchingArray;
        }
    }
    showPeople(root, people);

    // -========================Version filter NOT re-draw Table===============================-
    // function  filterNames(people) {
    //     let input = document.querySelector('input');
    //     let tdNames = document.querySelectorAll('td');
    //     let results = [];

    //     input.addEventListener('change', function (event) {
    //         [...tdNames].forEach(function (current, index, array) {
    //             if(current.dataset.name){
    //                 if(event.target.value ===''){
    //                     current.parentNode.classList.remove('hide__tr');
    //                 //     array.forEach(function (el) {
    //                 //
    //                 //     });
    //                  }
    //                 if(!current.textContent.includes(event.target.value)){
    //                    current.parentNode.classList.add('hide__tr')
    //                 }
    //             }
    //         });
    //     });
    // }

    function getPeopleHTML() {
        return root.innerHTML;
    }
    // console.log(getPeopleHTML());


