class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start):
        """Initializing the serial number generator with a starting value"""
        self.start = start
        self.current = start

    def generate(self):
        """Generate the next serial number"""
        serial_number = self.current
        self.current += 1
        return serial_number

    def reset(self):
        """Reset the serial number generator to the starting value"""
        self.current = self.start





                             # RANDOM WORD 


