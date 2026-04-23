# Typing Speed Test

A simple web-based typing speed test application built with HTML, CSS, and JavaScript. Test your typing speed and accuracy in real-time!

## Features

- **Real-time Speed Tracking**: Measures typing speed in Words Per Minute (WPM)
- **Accuracy Calculation**: Displays the percentage of correctly typed characters
- **Timer**: 5-second countdown timer to complete the test
- **Visual Feedback**: Correctly typed characters are highlighted in green, incorrect ones in red
- **Random Paragraphs**: Multiple paragraphs to practice with, selected randomly
- **Responsive Design**: Works seamlessly on different screen sizes
- **Easy Reset**: "Try Again" button to restart the test anytime

## How to Use

1. Open `index.html` in your web browser
2. Click on the textarea or start typing to begin the test
3. Type as accurately and quickly as possible
4. The timer will start automatically when you begin typing
5. Monitor your:
   - **Time**: Remaining seconds (5 seconds per test)
   - **WPM**: Words Per Minute (characters typed ÷ 5)
   - **Accuracy**: Percentage of correctly typed characters
6. Click "Try Again" to restart with a new paragraph

## Project Structure

```
├── index.html      # HTML structure and markup
├── index.js        # JavaScript logic for typing test functionality
├── style.css       # Styling and layout
└── README.md       # Project documentation
```

## Files Overview

### index.html
Contains the semantic HTML structure including:
- Title and meta tags
- Text display area for the paragraph
- Textarea for user input
- Statistics display (timer, WPM, accuracy)
- Restart button

### index.js
Implements the core functionality:
- Paragraph management and random selection
- Timer logic (5-second countdown)
- Character-by-character comparison and color coding
- WPM and accuracy calculations
- Event listeners for input and reset

### style.css
Provides styling including:
- Clean, centered layout
- Color-coded feedback (green for correct, red for incorrect)
- Professional typography
- Responsive design elements

## Technical Details

- **Language**: JavaScript (Vanilla, no frameworks)
- **Timer Duration**: 5 seconds per test
- **WPM Calculation**: (Total characters typed ÷ 5) ÷ elapsed time in minutes
- **Accuracy**: (Correct characters ÷ total characters typed) × 100



## Future Enhancements

Improvements for future versions:
- Difficulty levels (easy, medium, hard)
- Leaderboard/score history
- More diverse paragraph collection
- Customizable timer duration


**Enjoy improving your typing skills!** ⌨️
