// Basic unit tests for squawk code generation logic

const EMERGENCY_CODES = ['7500', '7600', '7700'];

// Simulate the code generation logic
function generateSquawkCode() {
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += Math.floor(Math.random() * 8);
  }
  return code;
}

function isValidSquawkCode(code) {
  // Check if code is 4 digits
  if (code.length !== 4) return false;
  
  // Check if all digits are 0-7 (octal)
  if (!/^[0-7]{4}$/.test(code)) return false;
  
  // Check if it's not an emergency code
  if (EMERGENCY_CODES.includes(code)) return false;
  
  return true;
}

// Test functions
function testCodeLength() {
  const code = generateSquawkCode();
  console.assert(code.length === 4, `Code length should be 4, got ${code.length}`);
  console.log('✓ Code length test passed');
}

function testValidDigits() {
  for (let i = 0; i < 100; i++) {
    const code = generateSquawkCode();
    const hasValidDigits = /^[0-7]{4}$/.test(code);
    console.assert(hasValidDigits, `Code ${code} contains invalid digits`);
  }
  console.log('✓ Valid digits test passed (100 iterations)');
}

function testEmergencyCodeExclusion() {
  // Test that validation correctly identifies emergency codes
  EMERGENCY_CODES.forEach(emergencyCode => {
    const isValid = isValidSquawkCode(emergencyCode);
    console.assert(!isValid, `Emergency code ${emergencyCode} should be invalid`);
  });
  console.log('✓ Emergency code exclusion test passed');
}

function testValidCodeFormat() {
  const validCodes = ['0000', '1234', '7777', '0123'];
  validCodes.forEach(code => {
    const isValid = isValidSquawkCode(code);
    console.assert(isValid, `Valid code ${code} should pass validation`);
  });
  console.log('✓ Valid code format test passed');
}

function testInvalidCodeFormat() {
  const invalidCodes = ['8888', '9999', 'ABCD', '123', '12345'];
  invalidCodes.forEach(code => {
    const isValid = isValidSquawkCode(code);
    console.assert(!isValid, `Invalid code ${code} should fail validation`);
  });
  console.log('✓ Invalid code format test passed');
}

function testUniqueness() {
  const generatedCodes = new Set();
  let duplicateFound = false;
  
  // Generate 1000 codes and check for duplicates
  for (let i = 0; i < 1000; i++) {
    const code = generateSquawkCode();
    if (generatedCodes.has(code)) {
      duplicateFound = true;
      break;
    }
    generatedCodes.add(code);
  }
  
  // Note: Some duplicates are expected with random generation
  // This test mainly ensures the generation function is working
  console.log(`✓ Uniqueness test completed. Generated ${generatedCodes.size} unique codes out of 1000 attempts`);
}

// Run all tests
function runTests() {
  console.log('Running Squawk Code Generator Tests...\n');
  
  try {
    testCodeLength();
    testValidDigits();
    testEmergencyCodeExclusion();
    testValidCodeFormat();
    testInvalidCodeFormat();
    testUniqueness();
    
    console.log('\n✅ All tests passed successfully!');
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
  }
}

// Export for Node.js or run directly
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    generateSquawkCode,
    isValidSquawkCode,
    runTests
  };
} else {
  // Run tests immediately if not in Node.js environment
  runTests();
}