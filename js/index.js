const baseUrl = "https://athleterest20211104093650.azurewebsites.net/api/athletes"

Vue.createApp({
    data() {
        return {
            Athletes: [],
            addData: { name: "", country: "", height: 0},
            addMessage: "",
            deleteMessage: "",
            countryToGetBy: "",
            countryAthletes: [],
        }
    },

    methods: {
        getAllAthletes() {
            this.helperGetAndShow(baseUrl)
        },
        async helperGetAndShow(url) {
            try {
                const response = await axios.get(url)
                this.Athletes = await response.data
            } catch(ex) {
                alert(ex.message)
            }
        },
        async addAthlete() {
            try {
                response = await axios.post(baseUrl, this.addData)
                this.addMessage = "response" + response.status + " " + response.statusText
                this.getAllAthletes()
            } catch(ex) {
                alert(ex.message)
            }
        },
        async deleteAthlete(deleteId) {
            const url = baseUrl + "/" + deleteId
            try {
                response = await axios.delete(url)
                this.deleteMessage = response.status + " " + response.statusText
                this.getAllAthletes()
            } catch(ex) {
                alert(ex.message)
            }
        },
        async getByCountry(country) {
            const url = baseUrl + "/" + "Country" + "/" + country
            try {
                const response = await axios.get(url)
                this.countryAthletes = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        }
    }

}).mount("#app")