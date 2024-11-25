import conf from "../lib/conf";

export class AdmissionService {
    admissionUri;
  constructor() {
    // Fixing the authUri assignment
    this.admissionUri = `${conf.apiBaseUri}/api/admission-form`;
  }

 
  async addRecord({programme,candidate_name,father_name,mother_name,gender,category,district,mobile,email}){
    try {
        const response = await fetch(this.admissionUri, {
            method: 'POST',
            body:JSON.stringify({programme,candidate_name,father_name,mother_name,gender,category,district,mobile,email})
        })
    } catch (error) {
        console.log("error in saving data",error);
        
    }
  }
}

const admissionService = new AdmissionService();
export default admissionService;
