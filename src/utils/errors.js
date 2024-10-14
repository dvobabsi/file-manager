export const handleInvalidInput = () => {
  console.log('Invalid input');
};

export const handleOperationFailed = (error) => {
  console.error(`Operation failed: ${error.message || 'An error occurred'}`);
};
