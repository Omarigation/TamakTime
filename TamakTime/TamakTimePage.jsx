import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform
} from 'react-native';

const TamakTimeApp = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ email: '', username: '', password: '' });

  // Handle navigation
  const navigateTo = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  // Handle login
  const handleLogin = () => {
    // In a real app, you would verify credentials with a backend
    setIsLoggedIn(true);
    setCurrentPage('profile');
  };

  // Handle registration
  const handleRegister = () => {
    // In a real app, you would register with a backend
    setIsLoggedIn(true);
    setCurrentPage('profile');
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('main');
  };

  // Handle login form changes
  const handleLoginChange = (field, value) => {
    setLoginForm({
      ...loginForm,
      [field]: value
    });
  };

  // Handle register form changes
  const handleRegisterChange = (field, value) => {
    setRegisterForm({
      ...registerForm,
      [field]: value
    });
  };

  // Render the header with navigation
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.logo}>TamakTime</Text>
        
        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => setMenuOpen(!menuOpen)}
        >
          <Text style={styles.menuButtonText}>{menuOpen ? '✕' : '☰'}</Text>
        </TouchableOpacity>
      </View>
      
      {menuOpen && (
        <View style={styles.mobileMenu}>
          <TouchableOpacity
            style={[styles.navItem, currentPage === 'main' && styles.navItemActive]}
            onPress={() => navigateTo('main')}
          >
            <Text style={styles.navText}>Main</Text>
          </TouchableOpacity>
          
          {!isLoggedIn ? (
            <>
              <TouchableOpacity
                style={[styles.navItem, currentPage === 'register' && styles.navItemActive]}
                onPress={() => navigateTo('register')}
              >
                <Text style={styles.navText}>Register</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.navItem, currentPage === 'login' && styles.navItemActive]}
                onPress={() => navigateTo('login')}
              >
                <Text style={styles.navText}>Login</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={[styles.navItem, currentPage === 'profile' && styles.navItemActive]}
                onPress={() => navigateTo('profile')}
              >
                <Text style={styles.navText}>Profile</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.navItem}
                onPress={handleLogout}
              >
                <Text style={styles.navText}>Logout</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
    </View>
  );

  // Render the main content based on current page
  const renderContent = () => {
    switch (currentPage) {
      case 'main':
        return (
          <ScrollView style={styles.content}>
            <View style={styles.card}>
              <Text style={styles.heading}>Welcome to TamakTime</Text>
              <Text style={styles.paragraph}>
                TamakTime is your platform for managing and enjoying delicious meals. 
                Browse recipes, plan your meals, and connect with other food enthusiasts.
              </Text>
              
              <View style={styles.features}>
                <View style={styles.featureCard}>
                  <Text style={styles.subheading}>Discover Recipes</Text>
                  <Text style={styles.paragraph}>Find new meal ideas and save your favorites for later.</Text>
                </View>
                
                <View style={styles.featureCard}>
                  <Text style={styles.subheading}>Plan Your Week</Text>
                  <Text style={styles.paragraph}>Organize your meals and generate shopping lists.</Text>
                </View>
                
                <View style={styles.featureCard}>
                  <Text style={styles.subheading}>Connect & Share</Text>
                  <Text style={styles.paragraph}>Share your culinary creations with the community.</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        );
        
      case 'login':
        return (
          <ScrollView style={styles.content}>
            <View style={styles.card}>
              <Text style={styles.heading}>Login</Text>
              
              <View style={styles.form}>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Username or Email</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Username or Email"
                    value={loginForm.username}
                    onChangeText={(text) => handleLoginChange('username', text)}
                  />
                </View>
                
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Password</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={loginForm.password}
                    onChangeText={(text) => handleLoginChange('password', text)}
                  />
                </View>
                
                <View style={styles.formFooter}>
                  <TouchableOpacity 
                    style={styles.button}
                    onPress={handleLogin}
                  >
                    <Text style={styles.buttonText}>Sign In</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    onPress={() => navigateTo('register')}
                  >
                    <Text style={styles.textButton}>Don't have an account?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        );
        
      case 'register':
        return (
          <ScrollView style={styles.content}>
            <View style={styles.card}>
              <Text style={styles.heading}>Register</Text>
              
              <View style={styles.form}>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={registerForm.email}
                    onChangeText={(text) => handleRegisterChange('email', text)}
                  />
                </View>
                
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Username</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={registerForm.username}
                    onChangeText={(text) => handleRegisterChange('username', text)}
                  />
                </View>
                
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Password</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={registerForm.password}
                    onChangeText={(text) => handleRegisterChange('password', text)}
                  />
                </View>
                
                <View style={styles.formFooter}>
                  <TouchableOpacity 
                    style={styles.button}
                    onPress={handleRegister}
                  >
                    <Text style={styles.buttonText}>Register</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    onPress={() => navigateTo('login')}
                  >
                    <Text style={styles.textButton}>Already have an account?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        );
        
      case 'profile':
        return (
          <ScrollView style={styles.content}>
            <View style={styles.card}>
              <Text style={styles.heading}>User Profile</Text>
              
              <View style={styles.profileHeader}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>
                    {(registerForm.username || loginForm.username || 'U').charAt(0).toUpperCase()}
                  </Text>
                </View>
                
                <View style={styles.profileInfo}>
                  <Text style={styles.subheading}>
                    {registerForm.username || loginForm.username || 'User'}
                  </Text>
                  <Text style={styles.paragraph}>
                    {registerForm.email || 'user@example.com'}
                  </Text>
                </View>
              </View>
              
              <View style={styles.settingsSection}>
                <Text style={styles.settingsHeading}>Account Settings</Text>
                
                <View style={styles.settingsList}>
                  <TouchableOpacity style={styles.settingsButton}>
                    <Text style={styles.settingsButtonText}>Edit Profile</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.settingsButton}>
                    <Text style={styles.settingsButtonText}>Change Password</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.settingsButton}>
                    <Text style={styles.settingsButtonText}>Notification Settings</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.settingsButton}>
                    <Text style={styles.settingsButtonText}>Privacy Settings</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={styles.settingsButton}
                    onPress={handleLogout}
                  >
                    <Text style={styles.logoutButtonText}>Logout</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        );
        
      default:
        return (
          <View style={styles.content}>
            <Text>Page not found</Text>
          </View>
        );
    }
  };

  // Render the footer
  const renderFooter = () => (
    <View style={styles.footer}>
      <View style={styles.footerContent}>
        <View style={styles.footerSection}>
          <Text style={styles.footerHeading}>TamakTime</Text>
          <Text style={styles.footerText}>Your favorite food management platform</Text>
        </View>
        
        <View style={styles.footerSection}>
          <Text style={styles.footerSubheading}>Quick Links</Text>
          <View style={styles.footerLinks}>
            <TouchableOpacity>
              <Text style={styles.footerLink}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Terms of Service</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.footerBottom}>
          <Text style={styles.copyright}>© 2025 TamakTime. All rights reserved.</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#4a63e3" barStyle="light-content" />
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  
  // Header and Navigation
  header: {
    backgroundColor: '#4a63e3',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  menuButton: {
    padding: 5,
  },
  menuButtonText: {
    fontSize: 24,
    color: 'white',
  },
  mobileMenu: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#5a73f3',
  },
  navItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    marginVertical: 2,
  },
  navItemActive: {
    backgroundColor: '#3951cc',
  },
  navText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  
  // Main Content
  content: {
    flex: 1,
    padding: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
    color: '#555',
  },
  
  // Features section
  features: {
    marginTop: 20,
  },
  featureCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 15,
  },
  
  // Forms
  form: {
    width: '100%',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#555',
    fontSize: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#4a63e3',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  formFooter: {
    marginTop: 20,
  },
  textButton: {
    color: '#4a63e3',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  
  // Profile
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: '#e0e7ff',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4a63e3',
  },
  profileInfo: {
    flex: 1,
  },
  settingsSection: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
  },
  settingsHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#444',
  },
  settingsList: {
    marginTop: 5,
  },
  settingsButton: {
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 4,
    marginBottom: 8,
  },
  settingsButtonText: {
    color: '#4a63e3',
    fontSize: 16,
  },
  logoutButtonText: {
    color: '#e53e3e',
    fontSize: 16,
  },
  
  // Footer
  footer: {
    backgroundColor: '#333',
    padding: 30,
    paddingBottom: 15,
  },
  footerContent: {},
  footerSection: {
    marginBottom: 20,
  },
  footerHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  footerSubheading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  footerText: {
    color: '#ccc',
    fontSize: 14,
  },
  footerLinks: {},
  footerLink: {
    color: '#ccc',
    paddingVertical: 5,
    fontSize: 14,
  },
  footerBottom: {
    borderTopWidth: 1,
    borderTopColor: '#555',
    paddingTop: 15,
    marginTop: 15,
  },
  copyright: {
    color: '#999',
    fontSize: 14,
  },
});

export default TamakTimeApp;