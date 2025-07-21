import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Event title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Event description is required'],
    maxlength: [2000, 'Description cannot be more than 2000 characters']
  },
  shortDescription: {
    type: String,
    required: [true, 'Short description is required'],
    maxlength: [300, 'Short description cannot be more than 300 characters']
  },
  type: {
    type: String,
    enum: ['workshop', 'seminar', 'hackathon', 'networking', 'webinar', 'conference'],
    required: [true, 'Event type is required']
  },
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced', 'all'],
    default: 'all'
  },
  tags: [{
    type: String,
    trim: true
  }],
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date,
    required: [true, 'End date is required']
  },
  location: {
    type: {
      type: String,
      enum: ['online', 'physical', 'hybrid'],
      required: [true, 'Location type is required']
    },
    venue: {
      type: String,
      required: function() {
        return this.location.type === 'physical' || this.location.type === 'hybrid';
      }
    },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zipCode: String
    },
    meetingLink: {
      type: String,
      required: function() {
        return this.location.type === 'online' || this.location.type === 'hybrid';
      }
    }
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Event organizer is required']
  },
  chapter: {
    type: String,
    required: [true, 'Chapter is required'],
    trim: true
  },
  maxAttendees: {
    type: Number,
    required: [true, 'Maximum attendees is required'],
    min: [1, 'Maximum attendees must be at least 1']
  },
  attendees: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    registeredAt: {
      type: Date,
      default: Date.now
    },
    attended: {
      type: Boolean,
      default: false
    }
  }],
  waitlist: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    joinedAt: {
      type: Date,
      default: Date.now
    }
  }],
  requirements: [{
    type: String,
    trim: true
  }],
  agenda: [{
    time: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    speaker: {
      name: String,
      bio: String,
      avatar: String
    }
  }],
  resources: [{
    title: {
      type: String,
      required: true,
      trim: true
    },
    url: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['slides', 'code', 'documentation', 'video', 'other'],
      default: 'other'
    }
  }],
  images: [{
    url: String,
    alt: String
  }],
  status: {
    type: String,
    enum: ['draft', 'published', 'cancelled', 'completed'],
    default: 'draft'
  },
  isPublic: {
    type: Boolean,
    default: true
  },
  registrationDeadline: {
    type: Date,
    required: [true, 'Registration deadline is required']
  },
  price: {
    type: Number,
    default: 0,
    min: [0, 'Price cannot be negative']
  },
  currency: {
    type: String,
    default: 'USD'
  }
}, {
  timestamps: true
});

// Indexes for better query performance
eventSchema.index({ startDate: 1 });
eventSchema.index({ chapter: 1 });
eventSchema.index({ organizer: 1 });
eventSchema.index({ status: 1 });
eventSchema.index({ type: 1 });
eventSchema.index({ tags: 1 });

// Virtual for available spots
eventSchema.virtual('availableSpots').get(function() {
  return this.maxAttendees - this.attendees.length;
});

// Virtual for is full
eventSchema.virtual('isFull').get(function() {
  return this.attendees.length >= this.maxAttendees;
});

// Ensure virtual fields are serialized
eventSchema.set('toJSON', { virtuals: true });

// Validate end date is after start date
eventSchema.pre('save', function(next) {
  if (this.endDate <= this.startDate) {
    return next(new Error('End date must be after start date'));
  }
  
  if (this.registrationDeadline > this.startDate) {
    return next(new Error('Registration deadline must be before start date'));
  }
  
  next();
});

const Event = mongoose.model('Event', eventSchema);

export default Event;