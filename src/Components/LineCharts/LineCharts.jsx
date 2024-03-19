import { LineChart, Line } from 'recharts';

const LineCharts = () => {

    const mathData =[
        {"student_id": 1, "name": "John", "math_marks": 85, "chemistry_marks": 75},
        {"student_id": 2, "name": "Alice", "math_marks": 72, "chemistry_marks": 80},
        {"student_id": 3, "name": "Bob", "math_marks": 90, "chemistry_marks": 85},
        {"student_id": 4, "name": "Emily", "math_marks": 65, "chemistry_marks": 70},
        {"student_id": 5, "name": "Michael", "math_marks": 78, "chemistry_marks": 72},
        {"student_id": 6, "name": "Sophia", "math_marks": 88, "chemistry_marks": 90},
        {"student_id": 7, "name": "David", "math_marks": 70, "chemistry_marks": 65},
        {"student_id": 8, "name": "Emma", "math_marks": 82, "chemistry_marks": 88},
        {"student_id": 9, "name": "James", "math_marks": 75, "chemistry_marks": 78},
        {"student_id": 10, "name": "Olivia", "math_marks": 79, "chemistry_marks": 82}
      ]
      
      
    return (
        <div className='ml-5'>
            <LineChart width={500} height={400} data={mathData}>
                <Line dataKey="math_marks" stroke='red'></Line>
                <Line dataKey="chemistry_marks" stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default LineCharts;