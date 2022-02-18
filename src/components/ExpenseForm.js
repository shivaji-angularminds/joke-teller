import React from 'react';
import { Formik } from 'formik';

class ExpenseForm extends React.Component {
   constructor(props) {
      super(props);

      this.initialValues = { name: '', amount: '', date: '', category: ''
   ,expenseArray:[] }
   }
   validate = (values) => {
      const errors = {};
      if (!values.name) {
         errors.name = 'Required';
      }
      if (!values.amount) {
         errors.amount = 'Required';
      }
      if (!values.date) {
         errors.date = 'Required';
      }
      if (!values.category) {
         errors.category = 'Required';
      }
      return errors;
   }
   handleSubmit = (values, setSubmitting) => {
      setTimeout(() => {
         alert(JSON.stringify(values, null, 2));
         setSubmitting(false);
      }, 400);
   }
   render() {
      return (
         <div id="expenseForm">
            <Formik
               initialValues={this.initialValues}
               validate={values => this.validate(values)}
               onSubmit={(values, { setSubmitting }) => this.handleSubmit(values, setSubmitting)} > 
               {
                  ({
                     values,
                     errors,
                     touched,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                     isSubmitting,
                     /* and other goodies */
                  }) => 
                  (
                     <form onSubmit={handleSubmit}>
                        {      console.log(values)
}
                        <label for="name">Title <span>{errors.name && touched.name && errors.name}</span></label>
                        <input type="text" id="name" name="name" placeholder="Enter expense title"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.name} />

                        <label for="amount">Amount <span>{errors.amount && touched.amount && errors.amount}</span></label>
                        <input type="number" id="amount" name="amount" placeholder="Enter expense amount"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.amount} />

                        <label for="date">Spend Date <span>{errors.date && touched.date && errors.date}</span></label>
                        <input type="date" id="date" name="date" placeholder="Enter date"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.date} />

                        <label for="category">Category <span>{errors.category && touched.category && errors.category}</span></label>
                        <select id="category" name="category"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.category}>
                           <option value="">Select</option>
                           <option value="Food">Food</option>
                           <option value="Entertainment">Entertainment</option>
                           <option value="Academic">Academic</option>
                        </select>
                        <input type="checkbox" value="one" id="date" name="expenseArray" placeholder="Enter date"
                           onChange={handleChange}
                           onBlur={handleBlur}
       />

                        <label for="category">Category <span>{errors.category && touched.category && errors.category}</span></label>
                        <input value="two" type="checkbox" id="date" name="expenseArray" placeholder="Enter date"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           />

                        <label for="category">Category <span>{errors.category && touched.category && errors.category}</span></label>

                        <input type="submit" value="Submit" disabled={isSubmitting} />
                     </form>
                  )
               }
            </Formik>
         </div>
      )
   }
}
export default ExpenseForm