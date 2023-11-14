// import {HeadlessJsTaskError} from 'HeadlessJsTask';

module.exports = async taskData => {
  const condition = true;
  //   if (!condition) {
  //     throw new HeadlessJsTaskError();
  //   }
  console.log('task from handless js');
  setInterval(() => {
    console.log('task is executing in bg ....');
  }, 2000);
};
