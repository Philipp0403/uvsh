import {e} from './alldata.js'

export const data = {
    labels: [
        'UzL',
        'CAU',
        'EUF'
    ],
    datasets: [
        {
            label: 'Landeszuschuss zu Betriebskosten',
            backgroundColor: '#f87979',
            data: [
                e,
                20,
                10
            ]
        },
        {
            label: 'Zuschüsse zur Finanzierung von Investitionen',
            backgroundColor: '#f87979',
            data: [
                30,
                20,
                10
            ]
        },
        {
            label: 'Drittmittel',
            backgroundColor: '#f87979',
            data: [
                30,
                20,
                80
            ]
        },
        {
            label: 'Sonstige Einnahmen',
            backgroundColor: '#f87979',
            data: [
                30,
                20,
                10
            ]
        },
        {
            label: 'Nicht genauer spezifizierte Einnahmen',
            backgroundColor: '#f87979',
            data: [
                30,
                20,
                10
            ]
        },
        {
            label: 'Entnahme aus Rücklagen',
            backgroundColor: '#f87979',
            data: [
                0,
                20,
                80
            ]
        },
        {
            label: 'Sachausgaben',
            backgroundColor: '#f87979',
            data: [
                30,
                20,
                10
            ]
        },
        {
            label: 'Personalausgaben',
            backgroundColor: '#f87979',
            data: [
                30,
                20,
                80
            ]
        },
        {
            label: 'Nicht genauer spezifizierte Ausgaben',
            backgroundColor: '#f87979',
            data: [
                30,
                20,
                10
            ]
        },
        {
            label: 'Zuwendung',
            backgroundColor: '#f87979',
            data: [
                30,
                20,
                10
            ]
        },
        {
            label: 'Investition bewegliche Sachen',
            backgroundColor: '#f87979',
            data: [
                0,
                20,
                80
            ]
        },
        {
            label: 'Besondere Finanzierungsausgaben',
            backgroundColor: '#f87979',
            data: [
                30,
                20,
                10
            ]
        }
    ]
}

export const options = {
    responsive: true,
    maintainAspectRatio: false
}