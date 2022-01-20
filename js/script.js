new Vue({
    el: '#app',
    data: {
        currentIndex: 0,
        inputMessage: '',    // messaggio da popolare tramite input
        filterContact: '',      // per input search -> filtra la ricerca per nome dei contatti
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
    },
    methods: {
        getAvatarImg (contact){
            return `img/avatar${contact.avatar}.jpg`;       // il return rimanda alla replicazione del v-for per stampare gli avatar dei contatti
        },
        setCurrentContact(index) {
            this.currentIndex = index;          // method che setta il currentIndex -> con il v-for, il contatto in lista cambia in base all'index corrente 
           
        },
        sendMessage: function () {
            if (this.inputMessage != '') {        // pusha solo se il text in input è diverso da '' -> ossia non sia vuoto
                this.contacts[this.currentIndex].messages.push({    // al currentIndx dei messaggi nei contatti -> pusha il messaggio inserito tramite input (inputMessage)
                    date: dayjs().format('DD/MM/YY HH:mm:ss'),
                    text: (this.inputMessage),
                    status: 'sent',                         // imposto lo status a 'sent' in modo da riprendere la class css 'sent'
                })
                this.inputMessage = '';                     // resetto stringa input ad ogni push -> ossia ad ogni invio messaggio
            }; 
            this.autoReply();                               // richiamo autoReply per ricevere risposta automatica 
        },
        autoReply: function () {
            setTimeout(() => {
                this.contacts[this.currentIndex].messages.push({
                    date: dayjs().format('DD/MM/YY HH:mm:ss'),
                    text: 'Conosci il reato di stalking? Ti invito a leggere l\'articolo 612-bis del codice penale prima che ti quereli.',
                    status: 'received',
                })
            }, 1000);     // dopo 1 sec dall'invio tramite input, l'autoreply rimanda un messaggio predefinito con status: received
        },
        sendAudio: function () {
            alert("Attenzione! Audio troppo lunghi potrebbero urtare i tuoi amici. Sii responsabile.");
        },
    }
});