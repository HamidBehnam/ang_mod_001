class ApiService {
    /*@ngInject*/
    constructor($resource) {
        this.$resource = $resource;
        this.success = () => console.log("success");
        this.error = () => console.log("error");
    }

    getInfoVerifiers(success = this.success, error = this.error) {
        const url = "http://localhost:3000/info_verifiers";
        const urlParams = {};
        this.$resource(url, urlParams).get({}, success, error);
    }

    queryInfoVerifiers(success = this.success, error = this.error) {
        const url = "http://localhost:3000/info_verifiers";
        const urlParams = {};
        this.$resource(url, urlParams).query({}, success, error);
    }
}

export default ApiService;