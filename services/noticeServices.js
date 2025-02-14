
import conf from "../lib/conf";

export class NoticeService {
    noticeUri

    constructor (){
        this.noticeUri = `${conf.apiBaseUri}/api/v1/notices`;
    }

    async getNotices (){
        try {
            const response =  await fetch(this.noticeUri)
            
            return response.json()
        } catch (error) {
            console.log(error)
        }
    }
}

const noticeService =  new NoticeService();
export default noticeService;