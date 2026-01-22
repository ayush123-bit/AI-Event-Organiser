import { query } from "./_generated/server";
import { v } from "convex/values";

// Get featured events (high registration count or recent)
export const getFeaturedEvents = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    // Remove the date filter to show all events including past ones for testing
    const events = await ctx.db
      .query("events")
      .withIndex("by_start_date")
      .order("desc")
      .collect();

    // Sort by registration count for featured
    const featured = events
      .sort((a, b) => b.registrationCount - a.registrationCount)
      .slice(0, args.limit ?? 3);

    return featured;
  },
});

// Get events by location (city/state)
export const getEventsByLocation = query({
  args: {
    city: v.optional(v.string()),
    state: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    // Get all events without date filtering
    let events = await ctx.db
      .query("events")
      .withIndex("by_start_date")
      .collect();

    // Filter by city or state
    if (args.city) {
      events = events.filter(
        (e) => e.city.toLowerCase() === args.city?.toLowerCase()
      );
    } else if (args.state) {
      events = events.filter(
        (e) => e.state?.toLowerCase() === args.state?.toLowerCase()
      );
    }

    return events.slice(0, args.limit ?? 4);
  },
});

// Get popular events (high registration count)
export const getPopularEvents = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    // Get all events
    const events = await ctx.db
      .query("events")
      .withIndex("by_start_date")
      .collect();

    // Sort by registration count
    const popular = events
      .sort((a, b) => b.registrationCount - a.registrationCount)
      .slice(0, args.limit ?? 6);

    return popular;
  },
});

// Get events by category with pagination
export const getEventsByCategory = query({
  args: {
    category: v.string(),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    // Get all events in category without date filtering
    const events = await ctx.db
      .query("events")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .collect();

    return events.slice(0, args.limit ?? 12);
  },
});

// Get event counts by category
export const getCategoryCounts = query({
  handler: async (ctx) => {
    // Get all events
    const events = await ctx.db
      .query("events")
      .withIndex("by_start_date")
      .collect();

    // Count events by category
    const counts = {};
    events.forEach((event) => {
      counts[event.category] = (counts[event.category] || 0) + 1;
    });

    return counts;
  },
});

// Get all events (useful for testing)
export const getAllEvents = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const events = await ctx.db
      .query("events")
      .order("desc")
      .collect();

    return events.slice(0, args.limit ?? 20);
  },
});

// Get recent events (sorted by creation date)
export const getRecentEvents = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const events = await ctx.db
      .query("events")
      .order("desc")
      .collect();

    // Sort by createdAt to show newest first
    const recent = events
      .sort((a, b) => b.createdAt - a.createdAt)
      .slice(0, args.limit ?? 6);

    return recent;
  },
});