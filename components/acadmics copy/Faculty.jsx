// import React from 'react'

// const Faculty = () => {
//   return (
//     <div>
//       hello world
//     </div>
//   )
// }

// export default Faculty
import React from "react";


const FacultyTable = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Following is the list of Faculties at CBS GROUP OF INSTITUTIONS:</h2>
      <p className="mb-4">Qualification & Experience of Faculty members</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Sr. No.</th>
              <th className="border px-4 py-2">Name of Staff Member</th>
              <th className="border px-4 py-2">Designation</th>
              <th className="border px-4 py-2">Qualification</th>
              <th className="border px-4 py-2">Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">Dr. Rajiv Yadav</td>
              <td className="border px-4 py-2">Director</td>
              <td className="border px-4 py-2">Ph.D</td>
              <td className="border px-4 py-2">15 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">Sh. Satish Kumar</td>
              <td className="border px-4 py-2">Registrar</td>
              <td className="border px-4 py-2">M.Sc., MBA</td>
              <td className="border px-4 py-2">15 years</td>
            </tr>
            <tr className="font-bold">
              <td className="border px-4 py-2" colSpan="5">Applied Science:</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">Mr. Jyoti</td>
              <td className="border px-4 py-2">A.P. Mathematics</td>
              <td className="border px-4 py-2">B.Sc., M.Sc., M.Phill</td>
              <td className="border px-4 py-2">15 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">4</td>
              <td className="border px-4 py-2">Ms. Sunita Phogat</td>
              <td className="border px-4 py-2">A.P. Physics</td>
              <td className="border px-4 py-2">B.Sc., M.Sc.</td>
              <td className="border px-4 py-2">5 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">5</td>
              <td className="border px-4 py-2">Mr. Abhishek Jaiswal</td>
              <td className="border px-4 py-2">A.P. Comm. Skills</td>
              <td className="border px-4 py-2">MA, B.Ed.</td>
              <td className="border px-4 py-2">2.1 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">6</td>
              <td className="border px-4 py-2">Ms. Sujata</td>
              <td className="border px-4 py-2">A.P. Comm. Skills</td>
              <td className="border px-4 py-2">BA, MA, B.Ed., M.Phill, Ph.D (P)</td>
              <td className="border px-4 py-2">6.9 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">7</td>
              <td className="border px-4 py-2">Mr. Amrender</td>
              <td className="border px-4 py-2">A.P. Physics</td>
              <td className="border px-4 py-2">B.Sc, M.Sc, M.Tech (P)</td>
              <td className="border px-4 py-2">10 months</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">8</td>
              <td className="border px-4 py-2">Mrs. Reena</td>
              <td className="border px-4 py-2">A.P. Physics</td>
              <td className="border px-4 py-2">M.Sc., M.Phill</td>
              <td className="border px-4 py-2">2.8 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">9</td>
              <td className="border px-4 py-2">Mr. Pankaj Tiwari</td>
              <td className="border px-4 py-2">A.P. Physics</td>
              <td className="border px-4 py-2">B.Sc., M.Sc., Ph.D (P)</td>
              <td className="border px-4 py-2">3.9 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">10</td>
              <td className="border px-4 py-2">Mr. Ritu Rani</td>
              <td className="border px-4 py-2">A.P. Chemistry</td>
              <td className="border px-4 py-2">B.Sc, M.Sc, B.Ed</td>
              <td className="border px-4 py-2">1 year</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">11</td>
              <td className="border px-4 py-2">Ms. Priti Katyal</td>
              <td className="border px-4 py-2">A.P. EVS</td>
              <td className="border px-4 py-2">B.Tech</td>
              <td className="border px-4 py-2">1 year</td>
            </tr>
            <tr className="font-bold">
              <td className="border px-4 py-2" colSpan="5">Computer Sc. & Engg.:</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">12</td>
              <td className="border px-4 py-2">Er. Amresh Kumar</td>
              <td className="border px-4 py-2">A.P – HOD</td>
              <td className="border px-4 py-2">B.Tech, M.Tech</td>
              <td className="border px-4 py-2">3 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">13</td>
              <td className="border px-4 py-2">Er. Rekhar</td>
              <td className="border px-4 py-2">A.P</td>
              <td className="border px-4 py-2">B.Tech, M.Tech</td>
              <td className="border px-4 py-2">7 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">14</td>
              <td className="border px-4 py-2">Er. Sandeep</td>
              <td className="border px-4 py-2">A.P</td>
              <td className="border px-4 py-2">B.Tech, M.Tech</td>
              <td className="border px-4 py-2">4.10 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">15</td>
              <td className="border px-4 py-2">Ms. Pooja Sharma</td>
              <td className="border px-4 py-2">A.P</td>
              <td className="border px-4 py-2">MCA</td>
              <td className="border px-4 py-2">1.7 year</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">16</td>
              <td className="border px-4 py-2">Mr. Archit Bhardwaj</td>
              <td className="border px-4 py-2">A.P</td>
              <td className="border px-4 py-2">B.Tech, M.Tech</td>
              <td className="border px-4 py-2">6.4 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">17</td>
              <td className="border px-4 py-2">Mr. Rahul Kadian</td>
              <td className="border px-4 py-2">A.P</td>
              <td className="border px-4 py-2">B.Tech, M.Tech(P)</td>
              <td className="border px-4 py-2">1.2 year</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">18</td>
              <td className="border px-4 py-2">Mr. Ranjit Singh</td>
              <td className="border px-4 py-2">A.P</td>
              <td className="border px-4 py-2">B.Tech, M.Tech(P)</td>
              <td className="border px-4 py-2">0.2 year</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">19</td>
              <td className="border px-4 py-2">Mr. Rajiv Mishra</td>
              <td className="border px-4 py-2">A.P</td>
              <td className="border px-4 py-2">B.Tech, M.Tech(P)</td>
              <td className="border px-4 py-2">5 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">20</td>
              <td className="border px-4 py-2">Mr. Ashwani Kumar</td>
              <td className="border px-4 py-2">A.P</td>
              <td className="border px-4 py-2">B.Tech, MIT</td>
              <td className="border px-4 py-2">1 months</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">21</td>
              <td className="border px-4 py-2">Mr. Deependra Kr. Dwivedi</td>
              <td className="border px-4 py-2">A.P</td>
              <td className="border px-4 py-2">B.Tech, M.Tech</td>
              <td className="border px-4 py-2">5 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">22</td>
              <td className="border px-4 py-2">Ms. Neha Khatri</td>
              <td className="border px-4 py-2">A.P</td>
              <td className="border px-4 py-2">B.Tech, M.Tech</td>
              <td className="border px-4 py-2">1.5 years</td>
            </tr>
            <tr className="font-bold">
              <td className="border px-4 py-2" colSpan="5">Electrical Engineering:</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">23</td>
              <td className="border px-4 py-2">Mr. Mandeep Goyat</td>
              <td className="border px-4 py-2">A.P (HOD)</td>
              <td className="border px-4 py-2">B.Tech, M.Tech, Gate Qualified</td>
              <td className="border px-4 py-2">2.8 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">24</td>
              <td className="border px-4 py-2">Mr. Sachin Kumar</td>
              <td className="border px-4 py-2">A.P</td>
              <td className="border px-4 py-2">B.Tech, M.Tech</td>
              <td className="border px-4 py-2">6.8 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">25</td>
              <td className="border px-4 py-2">Mr. Hitesh Kumar	</td>
              <td className="border px-4 py-2">A.P</td>
              <td className="border px-4 py-2">B.Tech, M.Tech</td>
              <td className="border px-4 py-2">3 years</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">26</td>
              <td className="border px-4 py-2">Mr. Anil Verma	</td>
              <td className="border px-4 py-2">A.P</td>
              <td className="border px-4 py-2">B.Tech, M.Tech</td>
              <td className="border px-4 py-2">2.1 years</td>
            </tr>
        
        
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyTable;
