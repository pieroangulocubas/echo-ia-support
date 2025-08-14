import { mutation, query } from "./_generated/server.js";

export const getMany= query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("users").collect();
    },

})

export const add = mutation({
    args: { },
    handler: async (ctx) => {
        const user = await ctx.db.insert("users", {name: `Pedro ${Math.floor(Math.random() * 100)}`});
        return user;
    },  
})