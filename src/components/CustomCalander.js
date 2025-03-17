


import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CSS_STYLES, LIGHT_THEME } from '../commonconfig/constStyle';
import { useDispatch, useSelector } from 'react-redux';
import { SidebarAction } from '../screens/redux/Actions';



/// props must required ////////////////////
// * selectedDates



function CustomCalendar({
    selectedDates,      //required
    attendence,
    multiselect,        //optional
    multiselectedDates  //required if multiselect
}) {
    // const attendence = props?.;
    // console.log('first,props',props)


    const currentDate = new Date();
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [mySelectedDate, setMySelectedDate] = useState(null);
    const [multiselectDates, setmultiselectDates] = useState([]);

    const dispatch = useDispatch();
    const holiday = useSelector(state => state.sidebarReducer.holidayList);
    console.log('holiday 2', holiday);
    useEffect(() => {
        dispatch(SidebarAction.GetHoliday())
    }, [])

    const weekarray = [
        { id: 0, val: 'Sun' },
        { id: 1, val: 'Mon' },
        { id: 2, val: 'Tue' },
        { id: 3, val: 'Wed' },
        { id: 4, val: 'Thu' },
        { id: 5, val: 'Fri' },
        { id: 6, val: 'Sat' },
    ]

    const goToPreviousMonth = () => {
        const previousMonth = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth() - 1,
            1
        );
        setSelectedDate(previousMonth);
    };

    const goToNextMonth = () => {
        const nextMonth = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth() + 1,
            1
        );
        setSelectedDate(nextMonth);
    };

    // const getDaysInMonthByWeekday = (date) => {
    //     const year = date.getFullYear();
    //     const month = date.getMonth();
    //     const daysInMonth = new Date(year, month + 1, 0).getDate();
    //     const daysArray = [];

    //     for (let day = 1; day <= daysInMonth; day++) {
    //         const currentDay = new Date(year, month, day);
    //         daysArray.push(currentDay);
    //     }

    //     // Group days by weekday
    //     const weekdays = [[], [], [], [], [], [], []];
    //     daysArray.forEach((day) => {
    //         const dayOfWeek = day.getDay();
    //         weekdays[dayOfWeek].push(day);
    //     });

    //     return weekdays;
    // };
    const getDaysInMonthByWeekday = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const lastmonthDays = new Date(year, month, 0).getDate();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfWeek = new Date(year, month, 1).getDay();
        // console.log('firstDayOfWeek', firstDayOfWeek)

        const daysArray = [];

        // Add null values for days before the first day of the month
        for (let i = 0; i < firstDayOfWeek; i++) {
            daysArray.push({ date: new Date(year, month - 1, lastmonthDays - i), disabled: true });
        }

        // Add the actual days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            daysArray.push({ date: new Date(year, month, i), disabled: false });
        }

        // Group days by weekday
        const weekdays = [[], [], [], [], [], [], []];
        // console.log('daysArray', daysArray)
        daysArray.forEach((day) => {
            if (day !== null) {
                const dayOfWeek = day?.date.getDay();
                // console.log('first', day.getDay())
                weekdays[dayOfWeek].push({ date: day?.date, disabled: day?.disabled });
            }
        });

        return weekdays;
    };


    const weekdaysInSelectedMonth = getDaysInMonthByWeekday(selectedDate);


    const selecthandeler = (date) => {
        const newdate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()

        setMySelectedDate(date.getDate() + '-' + date.getMonth());
        selectedDates(newdate);  //callback function

        if (multiselect) {
            // console.log('first,mul1', multiselectDates);
            if (multiselectDates.includes(newdate)) {
                const index = multiselectDates.indexOf(newdate);
                multiselectDates.splice(index, 1);
                setmultiselectDates(multiselectDates);
                console.log('first', index, '==', multiselectDates)
                // callback function
                multiselectedDates(multiselectDates);
            } else {
                setmultiselectDates([...multiselectDates, date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()])
                // callback function
                multiselectedDates([...multiselectDates, date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()])

            }
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goToPreviousMonth}>
                    <Text style={{}}>Prev</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    {selectedDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                    })}
                </Text>
                <TouchableOpacity onPress={goToNextMonth}>
                    <Text style={{ textAlign: 'right' }}>Next</Text>
                </TouchableOpacity>
            </View>
            {/* map week days */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 10 }}>
                {weekarray.map((item) => {
                    return (
                        <Text style={{ textAlign: 'center', width: 40 }}>{item?.val}</Text>
                    )
                })}
            </View>
            <View style={styles.calendar}>
                {weekdaysInSelectedMonth.map((weekday, index) => {
                    // console.log('first222', weekday)
                    return (
                        <View key={index} style={styles.week}>
                            {weekday.map((day, subIndex) => (
                                <TouchableOpacity
                                    key={subIndex}
                                    style={[styles.day, { backgroundColor: mySelectedDate == (day?.date.getDate() + '-' + day?.date.getMonth()) ? LIGHT_THEME : 'transparent' }]}
                                    disabled={day?.disabled}
                                    onPress={() => {
                                        if (day?.date) {
                                            selecthandeler(day?.date)
                                        }
                                    }}>
                                    <Text style={[day?.disabled && { opacity: 0.3,}]}>{day?.date ? day?.date.getDate() : ''}</Text>
                                    {/* <View style={[CSS_STYLES.c1, { backgroundColor: 'red', height: 15, width: 15, borderRadius: 5 }]}>
                                        <Text style={[{ fontColor: '#000', fontSize: 10 }]}>A</Text>
                                    </View> */}
                                </TouchableOpacity>
                            ))}
                        </View>
                    )
                }
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%'
        // backgroundColor:'green'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    calendar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'red'
    },
    week: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'red',
        // marginRight:5
    },
    day: {
        width: 40,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 5
        // borderWidth: 1,
        // borderColor: 'gray',
    },
});

export default CustomCalendar;
