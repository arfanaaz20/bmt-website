// Mock API service for authentication
// In real app, replace with actual API calls

export const authAPI = {
  login: async (email, password) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email === 'test@example.com' && password === 'password123') {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFrc2hheSBLdW1hciIsImVtYWlsIjoidGVzdEBleGFtcGxlLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      const user = {
        id: '123',
        name: 'Akshay Kumar',
        email: 'test@example.com',
        phone: '+91 98765 43210',
        memberSince: 'Feb 2026',
        nationality: 'Indian',
        coins: 1250,
        tier: 'Premium'
      };
      return { success: true, token, user };
    }
    return { success: false, error: 'Invalid credentials' };
  },

  signup: async (name, email, password) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    if (email === 'test@example.com') {
      return { success: false, error: 'Email already registered' };
    }
    
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ODc2NTQzMjEiLCJuYW1lIjoiTmV3IFVzZXIiLCJlbWFpbCI6Im5ld0BleGFtcGxlLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.QiJ9QxwLZaXp8w7VYzT7KjHnLmPoQsRqW8ZvXtYwabc';
    const user = {
      id: '987654321',
      name,
      email,
      phone: '',
      memberSince: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      nationality: '',
      coins: 100, // Bonus coins for signup
      tier: 'Basic'
    };
    return { success: true, token, user };
  },

  logout: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true };
  },

  validateToken: async (token) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    // In real app, this would validate the token with backend
    return token ? { valid: true } : { valid: false };
  }
};