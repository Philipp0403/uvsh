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
            backgroundColor: '#4AD66D',
            data: [
                e,
                20,
                10
            ]
        },
        {
            label: 'Zuschüsse zur Finanzierung von Investitionen',
            backgroundColor: '#25A244',
            data: [
                30,
                20,
                10
            ]
        },
        {
            label: 'Drittmittel',
            backgroundColor: '#1A7431',
            data: [
                30,
                20,
                80
            ]
        },
        {
            label: 'Sonstige Einnahmen',
            backgroundColor: '#00A6FB',
            data: [
                30,
                20,
                10
            ]
        },
        {
            label: 'Nicht genauer spezifizierte Einnahmen',
            backgroundColor: '#006494',
            data: [
                30,
                20,
                10
            ]
        },
        {
            label: 'Gesamt',
            backgroundColor: '#003554',
            data: [
                0,
                20,
                80
            ]
        },
        {
            label: 'Sachausgaben',
            backgroundColor: '#E87D2A',
            data: [
                30,
                20,
                10
            ]
        },
        {
            label: 'Personalausgaben',
            backgroundColor: '#DE6D17',
            data: [
                30,
                20,
                80
            ]
        },
        {
            label: 'Nicht genauer spezifizierte Ausgaben',
            backgroundColor: '#EF2B2B',
            data: [
                30,
                20,
                10
            ]
        },
        {
            label: 'Gesamtsumme',
            backgroundColor: '#CD0000',
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