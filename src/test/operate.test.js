import operate from '../logic/operate';

describe('operate', () => {
  it('should perform addition correctly', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });

  it('should perform subtraction correctly', () => {
    expect(operate('5', '2', '-')).toBe('3');
  });

  it('should perform multiplication correctly', () => {
    expect(operate('5', '2', 'x')).toBe('10');
  });

  it('should perform division correctly', () => {
    expect(operate('10', '5', '÷')).toBe('2');
  });

  it('should handle division by zero', () => {
    expect(operate('10', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('should perform modulo correctly', () => {
    expect(operate('7', '3', '%')).toBe('1');
  });

  it('should handle modulo by zero', () => {
    expect(operate('10', '0', '%')).toBe(
      "Can't find modulo as can't divide by 0.",
    );
  });

  it('should throw an error for an unknown operation', () => {
    expect(() => operate('1', '2', '^')).toThrow("Unknown operation '^'");
  });
});
