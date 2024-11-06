// import React, { useState } from 'react';
// import { Button, Modal, Input, DatePicker, TimePicker } from 'antd';
// import moment from 'moment';
// import Navbar from './navbar';

// const initialMeetings = [
//     { id: 1, patientName: 'John Doe', disease: 'Flu', dateRequested:'25-11-24' },
//     { id: 2, patientName: 'Jane Smith', disease: 'COVID-19', dateRequested:'09-11-24' },
//     { id: 3, patientName: 'Alice Eve', disease: 'Cancer',dateRequested:'11-11-24' },
//     { id: 4, patientName: 'Brown Dok', disease: 'Heart Attack', dateRequested:'08-11-24' }
// ];

// const Conference = () => {
//   const [pendingMeetings, setPendingMeetings] = useState(initialMeetings);
//   const [approvedMeetings, setApprovedMeetings] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [selectedMeeting, setSelectedMeeting] = useState(null);
//   const [newDate, setNewDate] = useState(null);
//   const [newTime, setNewTime] = useState(null);

//   // Approve Meeting Handler
//   const handleApprove = (meeting) => {
//     setPendingMeetings(pendingMeetings.filter((m) => m.id !== meeting.id));
//     setApprovedMeetings([...approvedMeetings, { ...meeting, status: 'Approved' }]);
//   };

//   // Reschedule Meeting Handler
//   const handleReschedule = (meeting) => {
//     setSelectedMeeting(meeting);
//     setIsModalVisible(true);
//   };

//   // Confirm Reschedule Handler
//   const handleConfirmSchedule = () => {
//     const updatedMeeting = {
//       ...selectedMeeting,
//       dateRequested: newDate ? newDate.format('YYYY-MM-DD') : selectedMeeting.dateRequested,
//       timeSlot: newTime ? newTime.format('h:mm A') : selectedMeeting.timeSlot,
//     };
//     setPendingMeetings(pendingMeetings.map((m) => (m.id === selectedMeeting.id ? updatedMeeting : m)));
//     setIsModalVisible(false);
//     setSelectedMeeting(null);
//   };

//   return (
//     <div style={{ padding: '20px',backgroundColor:'#bdeea5',height:'100vh' }}>
//         <Navbar/>
//       <h2>Pending Meeting Requests</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Patient Name</th>
//             <th>Disease</th>
//             <th>Date Requested</th>
//             {/* <th>Time Slot</th> */}
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pendingMeetings.map((meeting) => (
//             <tr key={meeting.id}>
//               <td>{meeting.patientName}</td>
//               <td>{meeting.disease}</td>
//               <td>{meeting.dateRequested}</td>
//               <td>{meeting.timeSlot}</td>
//               <td>
//                 <Button onClick={() => handleApprove(meeting)} style={{ marginRight: '10px', backgroundColor: '#3ab57e', color: 'black' }}>Approve</Button>
//                 <Button onClick={() => handleReschedule(meeting)}
//                 style={{ backgroundColor: '#3ab57e', color: 'black' }}>Reschedule</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2 style={{ marginTop: '40px' }}>Approved Meetings</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Patient Name</th>
//             <th>Disease</th>
//             <th>Date Approved</th>
//             <th>Meeting Date</th>
//             <th>Time Slot</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {approvedMeetings.map((meeting) => (
//             <tr key={meeting.id}>
//               <td>{meeting.patientName}</td>
//               <td>{meeting.disease}</td>
//               <td>{meeting.dateRequested}</td>
//               <td>{meeting.dateRequested}</td>
//               <td>{meeting.timeSlot}</td>
//               <td><Button style={{ backgroundColor: '#3ab57e', color: 'black' }}>Approved</Button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Reschedule Modal */}
//       <Modal
//         title="Reschedule Meeting"
//         visible={isModalVisible}
//         onOk={handleConfirmSchedule}
//         onCancel={() => setIsModalVisible(false)}
//         okText="Confirm Schedule"
//       >
//         <p>Select a new date and time for the meeting:</p>
//         <DatePicker onChange={(date) => setNewDate(date)} style={{ marginBottom: '10px', width: '100%' }} />
//         <TimePicker onChange={(time) => setNewTime(time)} format="h:mm A" style={{ width: '100%' }} />
//       </Modal>
//     </div>
//   );
// };

// export default Conference;







import React, { useState } from 'react';
import { Button, Modal, DatePicker, TimePicker } from 'antd';
import Navbar from './navbar';
import './Conference.css';

const initialMeetings = [
    { id: 1, patientName: 'John Doe', disease: 'Flu', dateRequested: '2024-11-25', timeSlot: '10:00 AM' },
    { id: 2, patientName: 'Jane Smith', disease: 'COVID-19', dateRequested: '2024-11-09', timeSlot: '11:30 AM' },
    { id: 3, patientName: 'Alice Eve', disease: 'Cancer', dateRequested: '2024-11-11', timeSlot: '1:00 PM' },
    { id: 4, patientName: 'Brown Dok', disease: 'Heart Attack', dateRequested: '2024-11-08', timeSlot: '3:00 PM' }
];

const Conference = () => {
  const [pendingMeetings, setPendingMeetings] = useState(initialMeetings);
  const [approvedMeetings, setApprovedMeetings] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [newDate, setNewDate] = useState(null);
  const [newTime, setNewTime] = useState(null);

  const handleApprove = (meeting) => {
    setPendingMeetings(pendingMeetings.filter((m) => m.id !== meeting.id));
    setApprovedMeetings([...approvedMeetings, { ...meeting, status: 'Approved' }]);
  };

  const handleReschedule = (meeting) => {
    setSelectedMeeting(meeting);
    setIsModalVisible(true);
  };

  const handleConfirmSchedule = () => {
    const updatedMeeting = {
      ...selectedMeeting,
      dateRequested: newDate ? newDate.format('YYYY-MM-DD') : selectedMeeting.dateRequested,
      timeSlot: newTime ? newTime.format('h:mm A') : selectedMeeting.timeSlot,
    };
    setPendingMeetings(pendingMeetings.map((m) => (m.id === selectedMeeting.id ? updatedMeeting : m)));
    setIsModalVisible(false);
    setSelectedMeeting(null);
    setNewDate(null);
    setNewTime(null);
  };

  return (
    <div className="conference-container" style={{backgroundColor:'#bdeea5'}}>
      <Navbar/>
      <h2>Pending Meeting Requests</h2>
      <table className="conference-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Disease</th>
            <th>Date Requested</th>
            {/* <th>Time Slot</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pendingMeetings.map((meeting) => (
            <tr key={meeting.id}>
              <td>{meeting.patientName}</td>
              <td>{meeting.disease}</td>
              <td>{meeting.dateRequested}</td>
              {/* <td>{meeting.timeSlot}</td> */}
              <td>
                <Button onClick={() => handleApprove(meeting)} className="action-button">Approve</Button>
                <Button onClick={() => handleReschedule(meeting)} className="action-button">Reschedule</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: '40px' }}>Approved Meetings</h2>
      <table className="conference-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Disease</th>
            <th>Date Approved</th>
            <th>Meeting Date</th>
            <th>Time Slot</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {approvedMeetings.map((meeting) => (
            <tr key={meeting.id}>
              <td>{meeting.patientName}</td>
              <td>{meeting.disease}</td>
              <td>{meeting.dateRequested}</td>
              <td>{meeting.dateRequested}</td>
              <td>{meeting.timeSlot}</td>
              <td><Button className="status-button">Approved</Button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        title="Reschedule Meeting"
        visible={isModalVisible}
        onOk={handleConfirmSchedule}
        onCancel={() => setIsModalVisible(false)}
        okText="Confirm Schedule"
      >
        <p>Select a new date and time for the meeting:</p>
        <DatePicker onChange={(date) => setNewDate(date)} style={{ marginBottom: '10px', width: '100%' }} />
        <TimePicker onChange={(time) => setNewTime(time)} format="h:mm A" style={{ width: '100%' }} />
      </Modal>
    </div>
  );
};

export default Conference;
